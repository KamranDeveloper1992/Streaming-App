import React, { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Premieres from "./Premieres";

function SectionFilim() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const imageData = [
    {
      url: "https://s8.vcdn.biz/static/f/8678735171/image.jpg/pt/r220x100x4",
      title: "Fast & Furious",
      description: "A high-speed action film featuring car chases and thrilling missions.",
    },
    {
      url: "https://s6.vcdn.biz/static/f/6548465841/image.jpg/pt/r220x100x4",
      title: "Avengers",
      description: "A team of superheroes join forces to save the world from catastrophic threats.",
    },
    {
      url: "https://s9.vcdn.biz/static/f/6338521611/image.jpg/pt/r220x100x4",
      title: "The Batman",
      description: "Bruce Wayne returns to protect Gotham City from crime and corruption.",
    },
    {
      url: "https://s8.vcdn.biz/static/f/6338520071/image.jpg/pt/r220x100x4",
      title: "Frozen",
      description: "A magical Disney tale about two royal sisters and the power of love.",
    },
  ];

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "200px",
          backgroundColor: "#252421",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          padding: "2rem",
        }}
      >
        {imageData.map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              p: 1,
              boxSizing: "border-box",
            }}
          >
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleOpen(image)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={image.url}
                alt={image.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </motion.div>
          </Box>
        ))}
      </Box>

      <Box>
        <Premieres />
      </Box>

      <Modal open={open} onClose={handleClose}>
        <AnimatePresence>
          {open && selectedImage && (
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={{ duration: 0.4 }}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                maxWidth: "400px",
                margin: "10% auto",
                textAlign: "center",
              }}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                {selectedImage.title}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, color: "#444" }}>
                {selectedImage.description}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}

export default SectionFilim;
