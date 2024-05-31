import React from 'react'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


function ExamplePost() {
  return (
    <Card className="p-4 w-full max-w-2xl flex flex-col justify-center gap-y-6">
        <div className="flex items-center gap-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2>Placeholder Name</h2>
            <small>Placeholder Date</small>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <h2>Post Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <hr />
        <div className="flex w-full justify-center items-center gap-x-8">
          <Input className="w-full max-w-xl" placeholder="Leave a comment..." />
          <Button>Comment</Button>
        </div>
      </Card>
  )
}

export default ExamplePost