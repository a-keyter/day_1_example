import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function page() {
  return (
    <main className="flex flex-col items-center gap-y-4 py-4 w-full">
      <div className="flex flex-col gap-y-4 w-full max-w-2xl p-4">
        <h2 className="text-2xl font-semibold">Create a new post</h2>
        <Card className="p-4 w-full">
        <Tabs defaultValue="human_text" className="w-full">
          <TabsList>
            <TabsTrigger value="human_text">Human Text</TabsTrigger>
            <TabsTrigger value="human_image">Human Image</TabsTrigger>
            <TabsTrigger value="ai_text">AI Text</TabsTrigger>
            <TabsTrigger value="ai_image">AI Images</TabsTrigger>
          </TabsList>
          <TabsContent value="human_text">
            Create a Human Text Post Here.
          </TabsContent>
          <TabsContent value="human_image">
            Create an Image Post Here.
          </TabsContent>
          <TabsContent value="ai_text">
            Create an AI Text Post Here.
          </TabsContent>
          <TabsContent value="ai_image">
            Create an AI Image Post Here.
          </TabsContent>
        </Tabs>
        </Card>
      </div>
    </main>
  );
}

export default page;
