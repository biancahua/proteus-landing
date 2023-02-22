import React from "react";


export const GettingStarted = () => {

  return (
    <div className="py-24">
      <div>
        <div className="flex flex-col justify-center px-10">
          <p className="text-4xl py-10 text-center">Getting Started</p>
          <p className="text-lg pb-10 text-zinc-800">Welcome to our application! This guide will help you get started using our app. Whether you're a first-time user or just need a refresher, we've got you covered. We'll walk you through the setup process and show you how to use our product to its fullest potential.</p>
          <p className="text-lg text-zinc-800">If you're interested in more detailed information on Proteus' features and functionality, be sure to check out our documentation. But for now, let's dive in and get started with using our app!</p>
        </div>
        <div className="flex flex-col items-center px-24 py-10">
          <ol className="text-lg font-bold">
            <li>1.  Download our desktop application from GitHub</li>
            <li>2.  Configure your Kubernetes cluster port within the application</li>
            <li>3.  Access our application's companion image from DockerHub</li>
            <li>4.  Ensure you have your NoSQL database URI at hand??</li>
            <li>5.  Within the desktop application, deploy the companion image as a CronJob</li>
            <li>6.  Scheduled Jobs will appear on the Homepage</li>
            <li>7.  Failed Job deployments will appear in red on the Archive</li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col justify-center px-10">
        <div className="text-4xl py-10 text-center font-bold">
          <p>Demo</p>
        </div>
        <div id='gif1' className="flex flex-col items-center py-8">
          <p className="text-2xl font-bold">GIF 1</p>
          <img className="h-48 my-8" src="src/assets/protozoa1.png" alt="gif1" />
          <p>This is a little blurb of our video</p>
        </div>
        <div id='gif2' className="flex flex-col items-center py-8">
          <p className="text-2xl font-bold">GIF 2</p>
          <img className="h-48 my-8" src="src/assets/protozoa1.png" alt="gif2" />
          <p>This is another little blurb of our video</p>
        </div>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  )
}