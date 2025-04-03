import React from 'react'
import passport from "../../assets/BlogUI/passport.png"
import introductionImg from "../../assets/BlogUI/Introduction.png"
import aipoweredImg from "../../assets/BlogUI/AI Powered.png"
import collaborateImg from "../../assets/BlogUI/Collaborate.png"
import ContactUI from '../HomeUI/ContactUI'
import Recomendation from '../blog/recommendation'
import { Blogs } from '../../config/blog'

const BlogIndividual = () => {
  return (
    <>
      <div className="all pt-8 md:pt-[145px] md:mx-[166.65px] mx-4 font-Poppins">

        <div className="heading_text md:w-[785px]">
          <h1 className="text-[32px] text-[#000000] font-semibold ">IRCC CONFIRMS CONTINUATION OF CURRENT EXPRESS ENTRY CATEGORIES IN 2024</h1>
          <div className="btn flex space-x-5 mt-[16px]">
            <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
            <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
          </div>
        </div>

        <div className="img mt-[32px]">
          <img className='w-full h-[574px]' src={passport} alt="" />
        </div>


        {/* ------------------INTRODUCTION----------------- */}
        <div className="Introduction">
          <h1 className='text-[28px] text-[#000000] font-semibold '>Introduction</h1>
          <p className='mt-10 text-[#1A202E]'>Figma has become a household name in the UIUX community. Being a truly browser-first product (not just storage in the cloud - no installation, no patching, no updates) and with highly collaborative features that no other player could think of or execute, Figma emerged as the clear market leader. </p>

          <p className='pt-10 text-[#1A202E]'>You can design anything on Figma – from a cool logo to native apps and much more. But design is just the beginning of building a world-class product. You need to bring your product to life by actually building it - Writing the damn code!</p>

          <p className='pt-10 text-[#1A202E]'>That’s where Locofy.ai comes in. While Figma is enough to get the ball rolling, Locofy.ai even takes it further by enabling anyone with a Figma design to get high-quality, pixel-perfect code. Hence, accelerating the building process – with minimal time and a shallow learning curve, builders can now quickly and easily go from Figma to code. </p>

          <p className='pt-10 text-[#1A202E]'>Validating an idea? Revamping your UI? The Locofy plugin puts Figma on steroids by taking your idea from design to websites and app.</p>

          <img className='mt-5 w-full' src={introductionImg} alt="" />

          <p className='text-[#1A202E] mt-10'>Locofy takes your design through various stages and eventually deploys it on a provider of your choice (Netlify, Vercel).</p>
        </div>


        {/* ------------------Zero Friction----------------- */}
        <div className="Zero Friction mt-16">
          <h1 className='text-[#1A202E] text-[24px] font-semibold'>Zero Friction</h1>
          <p className='pt-5 text-[#1A202E]'>We have made it very easy for builders to use Locofy. We are a Figma plugin (Adobe XD & Sketch support coming soon) and completely brower-based tool. You can use your existing tech & design stacks to transform Figma to code</p>

          <p className='pt-10 text-[#1A202E]'> Locofy is built by creators for creators and therefore, we understand designers & creators need flexibility and choices. Hence, Locofy provides a plethora of tools and options, not present in vanilla Figma, to accelerate your design to code journey.</p>

          <p className='pt-10 text-[#1A202E]'>Moreover, Locofy plugin offers a comprehensive collection of components such as buttons, inputs and dropdowns from all the top UI libraries namely Material, Chakra UI, Bootstrap and Ant Design, easing the process of designing while offering high flexibility & choices as you take your project from Figma to code</p>
        </div>


        {/* ------------------AI Powered----------------- */}
        <div className="Zero Friction mt-16">
          <h1 className='text-[#1A202E] text-[24px] font-semibold'>AI Powered</h1>
          <p className='pt-5 text-[#1A202E]'>Locofy converts your design components into the apt code by the help of something called “Tags”. Tags are essentially types that you can assign to components so Locofy can create proper code for them.</p>

          <p className='pt-10 text-[#1A202E]'>Tagging allows you to turn static layers on your Figma design files into interactive functional buttons, input fields, videos, iFrames and more.
            Locofy plugin uses AI to scan your design and recommends tags, so you can quickly tag all the components and go from Figma to code in astronomical speeds.</p>

          <img className='w-full mt-5' src={aipoweredImg} alt="" />
        </div>




        {/* ---------View Code & Digest Dynamic Data------------- */}
        <div className="Zero Friction mt-10">
          <h1 className='text-[#1A202E] text-[24px] font-semibold'>View Code & Digest Dynamic Data</h1>
          <p className='pt-5 text-[#1A202E]'>Locofy Builder doesn’t restrict engineers from creating apps that rely on a server or database for data.</p>

          <p className='pt-10 text-[#1A202E]'> Using it, developers can create websites & apps that can digest dynamic content by allowing them to split their design into functional components that accept props, much like you do in an actual code base, only this time it is easier, faster and much more visual.</p>

          <p className='pt-10 text-[#1A202E]'>Additionally, you can also just export the selected components you need without exporting the entire source code. These components can easily be plugged into your project and follow best industry practices so you don’t have to spend time refactoring and cleaning it!</p>

          <p className='pt-10 text-[#1A202E]'>Moreover, you also get access to the code files even before exporting in the Builder so you can monitor live changes to your code as you create components and accept props.</p>
        </div>



        {/* -------Share & Collaborate Seamlessly with Locofy Builder----- */}
        <div className="Zero Friction mt-10">
          <h1 className='text-[#1A202E] text-[24px] font-semibold'>Once you are ready to go live, the Locofy plugin will redirect you to the browser-based Locofy Builder where you can view code, share your work with your team members and not only will you get access to a live prototype, but you can quickly share the prototypes too!</h1>
          <p className='pt-5 text-[#1A202E]'>our team members can contribute directly via browser. </p>

          <p className='pt-10 text-[#1A202E]'> It also shows your design file as layers, much like Figma, so you can get a birds eye view of your design.</p>

          <p className='pt-10 text-[#1A202E]'>
            Locofy Builder is inspired by the collaborative nature of Figma and therefore, not only will you get access to a live prototype, but you can quickly share the prototypes too!</p>

          <p className='pt-10 text-[#1A202E]'>After you are done with the prototype, you can easily share it by using the public link provided by the Locofy Builder.</p>

          <img className='w-full mt-5' src={collaborateImg} alt="" />
        </div>


        {/* -----------Direct Deploy & Export-------------- */}
        <div className="Direct Deploy & Export mt-16">
          <h1 className='text-[#1A202E] text-[24px] font-semibold'>Direct Deploy & Export</h1>
          <p className='pt-5 text-[#1A202E]'>Not only do you get options in terms of UI libraries, Locofy Builder can also export code to various market leading frameworks like React, Next.js, Gatsby and React Native. Exported code can use TypeScript and CSS modules too</p>

          <p className='pt-10 text-[#1A202E]'>Don’t like frameworks? Locofy also supports plain HTML & CSS.</p>

          <p className='pt-10 text-[#1A202E]'>Locofy isn’t just another Figma to React plugin. It can also handle deployment for you.</p>
          <p className='pt-10 text-[#1A202E]'>Locofy integrates with trusted cloud hosts – Netlify and Vercel, freeing you from the nitty gritty nuances associated with deploying the code yourself. </p>
        </div>

        {/* -----------Conclusion-------------- */}
        <div className="Conclusion mt-16">
          <h1 className='text-[#1A202E] text-[24px] font-semibold'>Conclusion</h1>
          <p className='pt-5 text-[#1A202E]'>Figma is an exceptionally powerful tool to design UI/UX and offers a wide range of free community resources that are more than sufficient for anyone to take the ball and run with it. However, the entire journey of turning your pixel-perfect design to responsive apps can take weeks, if not months and even after that, iterating over work can be challenging</p>

          <p className='pt-10 text-[#1A202E]'>With Locofy.ai you can beat the clock and go from Figma to code while following all the best industry practices. It does so with an AI-powered plugin so you can easily go from Figma to code  and also provides you with features that are not present in Figma such as prototypes. </p>

          <p className='pt-10 text-[#1A202E]'>Locofy is on a mission to supercharge your creations by taking them from just design files to servers all over the world. Build your first project on locofy.ai now.</p>
        </div>


        {/* -------------you may also like--------------- */}

        
      <Recomendation/>
      </div>
      <ContactUI />
    </>
  )
}
export default BlogIndividual