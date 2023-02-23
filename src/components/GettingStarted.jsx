import React from "react";


export const GettingStarted = () => {

  return (
    <div className="py-24 my-40 px-24">
      <div >
        <div className="flex flex-col items-center">
          <p className="text-4xl py-10 text-center">Getting Started</p>
          <p className="text-lg pb-10 text-zinc-800">Welcome to Proteus! This guide will help you get started using our app. Whether you're a first-time user or just need a refresher, we've got you covered. We'll walk you through the setup process and show you how to use Proteus to its fullest potential.</p>
          <p className="text-lg text-zinc-800">If you're interested in more detailed information on Proteus' features and functionality, be sure to check out our documentation. But for now, let's dive in and get started with using our app!</p>
        </div>
        <div className="flex flex-col items-center md:px-24 sm:px-8 py-10">
          <div className="text-lg font-bold">
            <div className="flex flex-row justify-start pb-6">
              <p className="pr-6">1.</p>
              <p>Download our desktop application from GitHub</p>
            </div>
            <div className="flex flex-row justify-start pb-6">
              <p className="pr-6">2.</p>
              <p>Configure your Kubernetes cluster port within the application</p>
            </div>
            <div className="flex flex-row justify-start pb-6">
              <p className="pr-6">3.</p>
              <p>Access our application's companion image from DockerHub</p>
            </div>
            <div className="flex flex-row justify-start pb-6">
              <p className="pr-6">4.</p>
              <p className="flex flex-wrap">Deploy the image as a Job with your database URI and Kubernetes Cluster Service IP as environment variables and the restartPolicy set to "OnFailure"</p>
            </div>
            <div className="flex flex-row justify-start pb-6">
              <p className="pr-6">5.</p>
              <p>Scheduled Jobs will appear on the Homepage</p>
            </div>
            <div className="flex flex-row justify-start pb-6">
              <p className="pr-6">6.</p>
              <p>Failed Job deployments will appear in red on the Archive</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-10">
        <div className="text-4xl pb-10 pt-24 text-center font-bold">
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