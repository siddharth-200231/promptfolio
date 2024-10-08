import Feed from "@/components/Feed";

const page = () => {
  return (
    <section className="w-full flex flex-col items-center min-h-screen bg-gradient-to-r from-pink-50 via-orange-50 to-yellow-50 p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-2">
        Promptopia
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-2 text-center">
        Discover and Share Prompts
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-center text-gray-500 max-w-[80vw]">
        A community-driven platform where creators can explore, create, and share AI-generated prompts that make life easier. 
      </p>
      <Feed/>
    </section>
  );
}

export default page;
