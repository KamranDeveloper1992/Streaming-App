import React, { useState } from "react";
import { movies } from "../component/movies_card2";
import { Box, Modal, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

function Top_wath() {
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleOpen = (movie, e) => {
    const rect = e.target.getBoundingClientRect();
    setClickPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setSelectedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMovie(null);
  };

  return (
    <Box className="p-6">
      <h2 className="text-3xl font-bold mb-6">Top Watched on Movie Stream</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {movies.map((movie, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              onClick={(e) => handleOpen(movie, e)}
              style={{ cursor: "pointer" }}
              width={200}
              height={200}
              src={movie.image}
              alt={movie.title}
              className="w-400 h-200 object-cover rounded-lg shadow-lg"
            />
            <h3 className="mt-3 text-lg font-semibold">{movie.title}</h3>
            <p className="text-gray-500">
              {movie.year}, {movie.genre}
            </p>
            <button className="mt-2 text-cyan-600 font-semibold hover:underline">
              PURCHASE
            </button>
          </motion.div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <AnimatePresence>
          {open && selectedMovie && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                x: clickPosition.x - window.innerWidth / 2,
                y: clickPosition.y - window.innerHeight / 2,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#1e1e1e",
                padding: "20px",
                borderRadius: "16px",
                width: "50%",
                maxWidth: "500px",
                maxHeight: "90vh",
                overflowY: "auto",
                color: "#fff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              <img
                src={selectedMovie.image}
                alt={selectedMovie.title}
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "20px",
                }}
              />
              <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
                {selectedMovie.title}
              </Typography>
              <Typography sx={{ color: "#b0b0b0", fontSize: "14px", mb: 2 }}>
                {selectedMovie.year} · {selectedMovie.genre}
              </Typography>
              <Typography sx={{ fontSize: "15px", lineHeight: "1.6" }}>
                {selectedMovie.description || "No description available."}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </Box>
  );
}

export default Top_wath;
