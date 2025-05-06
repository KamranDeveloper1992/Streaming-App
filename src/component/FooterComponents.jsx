import { Box } from "@mui/material";
import React from "react";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import PlayStoreImg from "../assets/playStore.png";
import { motion } from "framer-motion";

function FooterComponents() {
  const iconStyle = {
    backgroundColor: "rgb(148, 148, 143)",
    padding: "10px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          width: "100%",
          height: "300px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", padding: "10px", gap: "70px" }}>
          {[
            <FaFacebook />,
            <FaInstagramSquare />,
            <AiFillTwitterCircle />,
            <FaYoutube />,
          ].map((Icon, i) => (
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={iconStyle}
              key={i}
            >
              <Icon.type style={{ fontSize: "30px" }} />
            </motion.div>
          ))}
        </Box>

        <Box sx={{ mt: 2 }}>
          {[
            "TV Channels",
            "MOVIES",
            "CARTOONS",
            "SERIES",
            "SPORT AND TV SHOW",
          ].map((text, i) => (
            <Link
              key={i}
              className="LinkColor"
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "20px",
              }}
            >
              {text}
            </Link>
          ))}
        </Box>

        <Box sx={{ mt: 2 }}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{ width: "150px", cursor: "pointer" }}
            src={PlayStoreImg}
            alt="Play Store"
          />
        </Box>
      </Box>
    </motion.div>
  );
}

export default FooterComponents;
