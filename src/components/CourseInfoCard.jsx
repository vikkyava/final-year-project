import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function CourseCard({ imageSrc, date, title, description }) {
  const [CardOpen, setCardOpen] = React.useState(false);
  const handleCardOpen = () => setCardOpen(true);
  const handleCardClose = () => setCardOpen(false);

  return (
    <div className="flex border rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
      <img src={imageSrc} alt={title} className="w-1/3 object-cover" />
      <div className="w-2/3 p-4 flex flex-col justify-between h-auto">
        <div className="flex items-center text-gray-600 mb-2">
          <span>{date}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 flex-grow">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>
        {description.lenth > 100 && (
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleCardOpen}
          >
            Read More
          </button>
        )}
      </div>
      <Modal
        open={CardOpen}
        onClose={handleCardClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <Box className="bg-white w-[90%] max-w-2xl mx-auto p-5 rounded-xl shadow-lg overflow-y-scroll max-h-[90%] md:max-h-[80%]">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default CourseCard;
