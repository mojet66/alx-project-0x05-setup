import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateImage = async () => {
    setIsLoading(true);
    const resp = await fetch("/api/generate-image", {
      method: "POST",
      body: JSON.stringify({
        prompt,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!resp.ok) {
      setIsLoading(false);
      return;
    }

    const data = await resp.json();
    setIsLoading(false);
    setImageUrl(data?.message);
    setGeneratedImages((prev) => [
      ...prev,
      { imageUrl: data?.message, prompt },
    ]);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-blue-400 text-4xl">
          Image Generation App
        </h1>
        <p className="mb-4 text-gray-700 text-lg">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full text-blue-400"
          />
          <button
            onClick={handleGenerateImage}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg w-full text-white transition duration-200"
          >
            {isLoading ? "Loading..." : "Generate Image"}
          </button>
        </div>

        {imageUrl && (
          <ImageCard
            action={() => setImageUrl(imageUrl)}
            imageUrl={imageUrl}
            prompt={prompt}
          />
        )}
      </div>
      {generatedImages.length ? (
        <div className="">
          <h3 className="mb-4 text-xl text-center">Generated Images</h3>
          <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-2 border max-w-full md:max-w-[1100px] h-96 overflow-y-scroll">
            {generatedImages?.map(({ imageUrl, prompt }: ImageProps, index) => (
              <ImageCard
                action={() => setImageUrl(imageUrl)}
                imageUrl={imageUrl}
                prompt={prompt}
                key={index}
                width="w-full"
                height="h-40"
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;

// import ImageCard from "@/components/common/ImageCard";
// import { ImageProps } from "@/interfaces";
// import React, { useState } from "react";

// const Home: React.FC = () => {
//   const [prompt, setPrompt] = useState<string>("");
//   const [imageUrl, setImageUrl] = useState<string>("");
//   const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleGenerateImage = async () => {
//     setIsLoading(true);
//     const resp = await fetch("/api/generate-image", {
//       method: "POST",
//       body: JSON.stringify({
//         prompt,
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });

//     if (!resp.ok) {
//       setIsLoading(false);
//       return;
//     }

//     const data = await resp.json();
//     setIsLoading(false);
//     setImageUrl(data?.message);
//     setGeneratedImages((prev) => [
//       ...prev,
//       { imageUrl: data?.message, prompt },
//     ]);
//   };

//   return (
//     <div className="flex flex-col items-center bg-gray-100 p-4 min-h-screen">
//       <div className="flex flex-col items-center">
//         <h1 className="mb-2 font-bold text-4xl">Image Generation App</h1>
//         <p className="mb-4 text-gray-700 text-lg">
//           Generate stunning images based on your prompts!
//         </p>

//         <div className="w-full max-w-md">
//           <input
//             type="text"
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Enter your prompt here..."
//             className="mb-4 p-3 border border-gray-300 rounded-lg w-full"
//           />
//           <button
//             onClick={handleGenerateImage}
//             className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg w-full text-white transition duration-200"
//           >
//             {isLoading ? "Loading..." : "Generate Image"}
//           </button>
//         </div>

//         {imageUrl && (
//           <ImageCard
//             action={() => setImageUrl(imageUrl)}
//             imageUrl={imageUrl}
//             prompt={prompt}
//           />
//         )}
//       </div>
//       {}
//     </div>
//   );
// };

// export default Home;
