import React, { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase/config";

const Form = ({ user }) => {
  const fileInputRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(imageUrls);
  };

  const handleEmojiClick = (emojiData) => {
    setText(text + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const textContent = e.target[0].value;
    const imageFiles = e.target[1].files;

    const imageUrls = [];

    /* Her bir resim doysası için Storage yükleme işlemi */
    for (const file of imageFiles) {
      const uniqueName = `${Date.now()}_${file.name}`;
      const storageRef = ref(storage, `images/${uniqueName}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      imageUrls.push(downloadURL);
    }

    /* Kolleksiyon Referans Alma */
    const tweetsCol = collection(db, "tweets");

    /* Kolleksiyona Yeni Döküman Ekleme */
    /* addDoc methodu async bir metotdur */
    await addDoc(tweetsCol, {
      textContent,
      imageContent: imageUrls,
      createdAt: serverTimestamp(),
      user: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      likes: [],
      isEdited: false,
    });

    setText("");
    setSelectedImages([]);
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 text-white space-y-4 border-b border-[#2f3336] relative"
    >
      <div className="flex items-start space-x-3">
        <img
          src={!user ? "./avatar.jpg" : user.photoURL}
          className="w-10 h-10 rounded-full"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-transparent border-none resize-none text-lg placeholder-gray-500 focus:outline-none"
          rows="2"
          placeholder="Neler oluyor?"
        ></textarea>
      </div>

      <div className="ml-12 flex flex-wrap gap-2">
        {selectedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`selected ${index}`}
            className="w-20 h-20 object-cover rounded-md"
          />
        ))}
      </div>

      <div className="flex items-center justify-between ml-12">
        <div className="flex items-center space-x-3 text-blue-400">
          <svg
            onClick={handleFileInputClick}
            viewBox="0 0 24 24"
            width={20}
            height={20}
            className="cursor-pointer"
          >
            <path
              fill="#1d9bf0"
              d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            className="cursor-pointer"
          >
            <path
              fill="#1d9bf0"
              d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            className="cursor-pointer"
          >
            <path
              fill="#1d9bf0"
              d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"
            ></path>
          </svg>
          <svg
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            viewBox="0 0 24 24"
            width={20}
            height={20}
            className="cursor-pointer"
          >
            <path
              fill="#1d9bf0"
              d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            className="cursor-pointer"
          >
            <path
              fill="#1d9bf0"
              d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            className="cursor-pointer"
          >
            <path
              fill="#1d9bf0"
              d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"
            ></path>
          </svg>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            multiple
          />
        </div>
        <button
          className={`${
            text ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-400"
          } text-white font-bold py-2 px-4 rounded-full`}
          disabled={!text || isSubmitting}
        >
          {isSubmitting ? "Gönderiliyor..." : "Gönder"}
        </button>
      </div>
      {showEmojiPicker && (
        <div className="absolute z-10 left-12">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </form>
  );
};

export default Form;
