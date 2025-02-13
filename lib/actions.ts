"use server";

import { revalidatePath } from "next/cache";
import { incrementVotes, insertQuestion, insertTopic } from "./data";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres"


export async function addTopic(data: FormData) {
  let topic;
  try {
    topic = await insertTopic({
      title: data.get("title") as string,
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add topic.");
  } finally {
    revalidatePath("/ui/topics/[id]", "page");
    topic && redirect(`/ui/topics/${topic.id}`);
  }
}
  export async function addQuestion(question: FormData) {
    try {
      insertQuestion({
        title: question.get("title") as string,
        topic_id: question.get("topic_id") as string,
        votes: 0,
      });
      revalidatePath("/ui/topics/[id]", "page");
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to add question.");
    }
  }

  export async function addVote(data: FormData) {
    try {
      incrementVotes(data.get("id") as string);
      revalidatePath("/ui/topics/[id]", "page");
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to add vote.");
    }
  }

  export async function addAnswer(questionId: string, answer: string) {
    await sql`
      INSERT INTO answers (answers, question_id)
      VALUES (${answer}, ${questionId});
    `
    revalidatePath(`/ui/questions/${questionId}`)
  }

  export async function markAsAccepted(questionId: string, answerId: string) {
    await sql`
      UPDATE questions
      SET answer_id = ${answerId}
      WHERE id = ${questionId};
    `
    revalidatePath(`/ui/questions/${questionId}`)
  }

  

