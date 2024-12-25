import React, { useState } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #3498db, white)`,
        color: "#333",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "background-color 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "15rem",
            margin: "0",
            lineHeight: "1",
            color: "#3498db",
            animation: "textShadowPulse 2s ease-in-out infinite",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: "3rem",
            margin: "0",
            color: "#2980b9",
            opacity: "0.7",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          Page Not Found
        </h2>
      </div>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          textAlign: "center",
          margin: "2rem 0",
          color: "#555",
          animation: "fadeIn 2s",
        }}
      >
        Oops! It seems you've ventured into the unknown. The page you're looking
        for has vanished into the digital void.
      </p>
      <Link to="/">
        <button
          style={{
            padding: "15px 30px",
            fontSize: "1.2rem",
            color: "white",
            backgroundColor: "#3498db",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            animation: "pulse 2s infinite",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#2980b9";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#3498db";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Return to Safety
        </button>
      </Link>
      <style jsx global>{`
        @keyframes textShadowPulse {
          0% {
            text-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(52, 152, 219, 0.8);
          }
          100% {
            text-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(52, 152, 219, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(52, 152, 219, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
