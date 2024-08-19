import React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {};

function NewsCard({ imageSrc, title, date, content }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <img
        src={imageSrc}
        alt="News Cover"
        width={256}
        height={256}
        className="w-full aspect-square object-cover rounded-lg"
      />
      <div className="relative -top-10 w-full flex">
        <div className="w-11/12 mx-auto bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p>
            {content.length > 100 ? `${content.slice(0, 100)}...` : content}
          </p>
          {content.length > 100 && (
            <button
              className="text-blue-500 hover:underline"
              onClick={handleOpen}
            >
              View More
            </button>
          )}
          <div className="flex items-center gap-3 mb-1 mt-5">
            <i class="fa-regular fa-calendar"></i>
            <span>{date}</span>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <Box
          sx={style}
          className="bg-white w-[90%] max-w-2xl mx-auto p-5 rounded-xl shadow-lg overflow-y-scroll max-h-[90%] md:max-h-[80%]"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default NewsCard;
