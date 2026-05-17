"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryData: Record<
  string,
  { title: string; image: string; year: string }[]
> = {
  "Realistic Paintings": [
    {
      title: "The Portrait",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1544702707-dc47936a5242?q=80&w=800",
    },
    {
      title: "Still Life",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800",
    },
    {
      title: "Classic Study",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
    },
    {
      title: "Ocean View",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1505118380757-91f5f45d8de7?q=80&w=800",
    },
  ],
  "Contemporary Art": [
    {
      title: "Monochrome Silence",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=800",
    },
    {
      title: "The Void",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
    },
    {
      title: "Structured Light",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1513364233151-6820df38865c?q=80&w=800",
    },
  ],
  "Abstract Paintings": [
    {
      title: "Chaos & Order",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800",
    },
    {
      title: "Fluid Soul",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800",
    },
  ],
  "Modern Art": [
    {
      title: "Urban Pulse",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1515405290399-1738a06393e3?q=80&w=800",
    },
  ],
  Masterpieces: [
    {
      title: "The Legacy Wall",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=800",
    },
  ],
  "Wall Paintings": [
    {
      title: "Exterior Mural",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800",
    },
  ],
};

const shopData = [
  {
    title: "Midnight Bloom",
    price: "$1,200",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=400",
  },
  {
    title: "Neon Pulse",
    price: "$850",
    image:
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=400",
  },
  {
    title: "Ethereal Waves",
    price: "$2,100",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=400",
  },
];

const categories = Object.keys(galleryData);

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showContact, setShowContact] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    title: string;
    price: string;
    image: string;
  } | null>(null);

  const [orderForm, setOrderForm] = useState({
    name: "",
    contact: "",
    vision: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOrderSubmit = async () => {
    if (!orderForm.name || !orderForm.contact || !orderForm.vision) {
      alert("Please fill in all fields to request your masterpiece.");
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "47221c1c-39bb-42f8-b294-19dad3cff06a",
          subject: "New Art Commission Request - Wisdom Masterpieces",
          from_name: orderForm.name,
          client_contact: orderForm.contact,
          client_vision: orderForm.vision,
        }),
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setShowOrder(false);
        setIsSubmitted(false);
        setOrderForm({ name: "", contact: "", vision: "" });
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please reach out via email directly.");
      setIsSubmitting(false);
    }
  };

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY:
          !hasEntered && !showContact && !showShop && !showOrder
            ? "hidden"
            : "visible",
        backgroundColor: "#050505",
        color: "#f5f5f7",
        fontFamily: "sans-serif",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        @keyframes shift-bg { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animated-neon-bg { background: linear-gradient(-45deg, #050505, #1a000d, #050a14, #1a0014, #1a000d); background-size: 400% 400%; animation: shift-bg 20s ease infinite; }
        @keyframes flower-glow { 0%, 100% { filter: drop-shadow(0 0 10px #ff00aa) drop-shadow(0 0 20px #ff00aa66); stroke: #ff00aa; } 33% { filter: drop-shadow(0 0 10px #bf00ff) drop-shadow(0 0 20px #bf00ff66); stroke: #bf00ff; } 66% { filter: drop-shadow(0 0 10px #ff0055) drop-shadow(0 0 20px #ff005566); stroke: #ff0055; } }
        .neon-input { width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 1rem; border-radius: 4px; outline: none; transition: all 0.3s ease; font-family: sans-serif; margin-bottom: 1.5rem; }
        .neon-input:focus { border-color: #ff00aa; box-shadow: 0 0 15px rgba(255,0,170,0.3); }
      `,
        }}
      />

      <div
        className="animated-neon-bg"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.15,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{
            width: "250vw",
            height: "250vh",
            maxWidth: "1200px",
            maxHeight: "1200px",
            animation: "flower-glow 15s linear infinite",
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeWidth="0.08"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22C12 22 7 14 7 8C7 4.5 9.5 2 12 2C14.5 2 17 4.5 17 8C17 14 12 22 12 22Z" />
          <path d="M12 22C12 22 5 15 5 9C5 6.5 6.5 4.5 9 4.5C11 4.5 12 7 12 7" />
          <path d="M12 22C12 22 19 15 19 9C19 6.5 17.5 4.5 15 4.5C13 4.5 12 7 12 7" />
          <path d="M12 22C12 22 1 17 1 11.5C1 8.5 3 6.5 5.5 6.5C8 6.5 10 10 10 10" />
          <path d="M12 22C12 22 23 17 23 11.5C23 8.5 21 6.5 18.5 6.5C16 6.5 14 10 14 10" />
          <path d="M12 22C12 22 4 24 1.5 20.5C-0.5 17.5 2 13 5.5 14C8.5 15 12 22 12 22Z" />
          <path d="M12 22C12 22 20 24 22.5 20.5C24.5 17.5 22 13 18.5 14C15.5 15 12 22 12 22Z" />
        </svg>
      </div>

      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: "1rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                backgroundColor: "rgba(5,5,5,0.9)",
                border: "1px solid rgba(255,0,170,0.3)",
                boxShadow: "0 0 40px rgba(255,0,170,0.2)",
                borderRadius: "16px",
                padding: "4rem 2rem",
                width: "100%",
                maxWidth: "500px",
                textAlign: "center",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "3.5rem",
                  color: "#ff00aa",
                  textShadow: "0 0 10px rgba(255,0,170,0.5)",
                  margin: "0 0 2.5rem 0",
                  lineHeight: 1,
                }}
              >
                Connect
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "3px",
                      color: "#888",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Phone
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      letterSpacing: "1px",
                      color: "#fff",
                    }}
                  >
                    +91-9428664039 <br /> +91-7990551619
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "3px",
                      color: "#888",
                      marginBottom: "0.3rem",
                    }}
                  >
                    WhatsApp
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      letterSpacing: "1px",
                      color: "#fff",
                    }}
                  >
                    9428664039
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "3px",
                      color: "#888",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Email
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      letterSpacing: "1px",
                      color: "#ff00aa",
                    }}
                  >
                    arajput09@gmail.com
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "3px",
                      color: "#888",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Instagram
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      letterSpacing: "1px",
                      color: "#fff",
                    }}
                  >
                    @rujuta_artgallery
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "3px",
                      color: "#888",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Location
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      letterSpacing: "1px",
                      color: "#fff",
                    }}
                  >
                    Ahmedabad, Gujarat, India
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowContact(false)}
                style={{
                  marginTop: "3rem",
                  padding: "0.8rem 2.5rem",
                  backgroundColor: "transparent",
                  color: "#ff00aa",
                  border: "1px solid #ff00aa",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ff00aa";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(255,0,170,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ff00aa";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showShop && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: "1rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                backgroundColor: "rgba(5,5,5,0.9)",
                border: "1px solid rgba(255,0,170,0.3)",
                boxShadow: "0 0 40px rgba(255,0,170,0.2)",
                borderRadius: "16px",
                padding: "3rem 2rem",
                width: "100%",
                maxWidth: "900px",
                textAlign: "center",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              {selectedProduct ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "2.5rem",
                      textAlign: "left",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ flex: "1 1 300px" }}>
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "50vh",
                          objectFit: "cover",
                          borderRadius: "8px",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        flex: "1 1 300px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "2.5rem",
                          fontWeight: "bold",
                          color: "#fff",
                          textTransform: "uppercase",
                          letterSpacing: "2px",
                          margin: "0 0 0.5rem 0",
                        }}
                      >
                        {selectedProduct.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "1.5rem",
                          color: "#ff00aa",
                          fontWeight: "bold",
                          margin: "0 0 1.5rem 0",
                        }}
                      >
                        {selectedProduct.price}
                      </p>
                      <p
                        style={{
                          color: "#aaa",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                          marginBottom: "2.5rem",
                          letterSpacing: "1px",
                        }}
                      >
                        An exquisite original piece available for acquisition.
                        Contact the gallery to arrange a private viewing or
                        finalize your purchase.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          onClick={() => {
                            setSelectedProduct(null);
                            setShowShop(false);
                            setShowContact(true);
                          }}
                          style={{
                            flex: 1,
                            padding: "1rem",
                            backgroundColor: "#ff00aa",
                            color: "#fff",
                            border: "1px solid #ff00aa",
                            borderRadius: "4px",
                            fontSize: "0.85rem",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: "0 0 15px rgba(255,0,170,0.5)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#fff";
                            e.currentTarget.style.color = "#ff00aa";
                            e.currentTarget.style.boxShadow =
                              "0 0 25px rgba(255,0,170,0.8)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#ff00aa";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.boxShadow =
                              "0 0 15px rgba(255,0,170,0.5)";
                          }}
                        >
                          Inquire to Buy
                        </button>
                        <button
                          onClick={() => setSelectedProduct(null)}
                          style={{
                            flex: 1,
                            padding: "1rem",
                            backgroundColor: "transparent",
                            color: "#888",
                            border: "1px solid #888",
                            borderRadius: "4px",
                            fontSize: "0.85rem",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.borderColor = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#888";
                            e.currentTarget.style.borderColor = "#888";
                          }}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <>
                  <h2
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: "3rem",
                      color: "#ff00aa",
                      textShadow: "0 0 10px rgba(255,0,170,0.5)",
                      margin: "0 0 2rem 0",
                      lineHeight: 1,
                    }}
                  >
                    Available Masterpieces
                  </h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "1.5rem",
                    }}
                  >
                    {shopData.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: "#0a0a0a",
                          border: "1px solid rgba(255,255,255,0.1)",
                          padding: "1rem",
                          borderRadius: "8px",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "4px",
                            marginBottom: "1rem",
                          }}
                        />
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#fff",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            color: "#ff00aa",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                          }}
                        >
                          {item.price}
                        </p>
                        <button
                          onClick={() => setSelectedProduct(item)}
                          style={{
                            padding: "0.5rem 1rem",
                            width: "100%",
                            backgroundColor: "transparent",
                            color: "#fff",
                            border: "1px solid rgba(255,0,170,0.5)",
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#ff00aa";
                            e.currentTarget.style.boxShadow =
                              "0 0 10px rgba(255,0,170,0.5)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setShowShop(false);
                      setSelectedProduct(null);
                    }}
                    style={{
                      marginTop: "3rem",
                      padding: "0.8rem 2.5rem",
                      backgroundColor: "transparent",
                      color: "#ff00aa",
                      border: "1px solid #ff00aa",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ff00aa";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.boxShadow =
                        "0 0 15px rgba(255,0,170,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#ff00aa";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Close
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showOrder && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: "1rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                backgroundColor: "rgba(5,5,5,0.9)",
                border: "1px solid rgba(255,0,170,0.3)",
                boxShadow: "0 0 40px rgba(255,0,170,0.2)",
                borderRadius: "16px",
                padding: "4rem 2rem",
                width: "100%",
                maxWidth: "600px",
                textAlign: "center",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "3.5rem",
                  color: "#ff00aa",
                  textShadow: "0 0 10px rgba(255,0,170,0.5)",
                  margin: "0 0 1rem 0",
                  lineHeight: 1,
                }}
              >
                Request Order
              </h2>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#888",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Commission a custom masterpiece
              </p>

              {/* NEW NOTE LINE */}
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#f5f5f7",
                  fontStyle: "italic",
                  letterSpacing: "1px",
                  marginBottom: "2.5rem",
                  opacity: 0.9,
                }}
              >
                "If you are sure for an order please connect directly via
                WhatsApp/call"
              </p>

              <div style={{ textAlign: "left" }}>
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="neon-input"
                  value={orderForm.name}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="YOUR EMAIL / WHATSAPP"
                  className="neon-input"
                  value={orderForm.contact}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, contact: e.target.value })
                  }
                />
                <textarea
                  rows={4}
                  placeholder="DESCRIBE YOUR VISION..."
                  className="neon-input"
                  style={{ resize: "vertical" }}
                  value={orderForm.vision}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, vision: e.target.value })
                  }
                ></textarea>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <button
                  onClick={handleOrderSubmit}
                  disabled={isSubmitting || isSubmitted}
                  style={{
                    padding: "0.8rem 2.5rem",
                    backgroundColor: isSubmitted ? "#00ff66" : "#ff00aa",
                    color: isSubmitted ? "#000" : "#ffffff",
                    border: "1px solid",
                    borderColor: isSubmitted ? "#00ff66" : "#ff00aa",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    cursor: isSubmitting || isSubmitted ? "default" : "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: isSubmitted
                      ? "0 0 15px rgba(0,255,102,0.5)"
                      : "0 0 15px rgba(255,0,170,0.5)",
                  }}
                >
                  {isSubmitting
                    ? "SENDING..."
                    : isSubmitted
                      ? "SENT!"
                      : "SUBMIT"}
                </button>
                <button
                  onClick={() => setShowOrder(false)}
                  style={{
                    padding: "0.8rem 2.5rem",
                    backgroundColor: "transparent",
                    color: "#888",
                    border: "1px solid #888",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#888";
                    e.currentTarget.style.borderColor = "#888";
                  }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.section
            key="entrance"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              style={{ textAlign: "center", margin: "0 0 1rem 0" }}
            >
              <div
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "clamp(4rem, 10vw, 8rem)",
                  color: "#ff00aa",
                  textShadow: "0 0 15px rgba(255,0,170,0.6)",
                  marginBottom: "-10px",
                }}
              >
                Wisdom
              </div>
              <div
                style={{
                  fontFamily: "serif",
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  fontStyle: "italic",
                  letterSpacing: "-2px",
                }}
              >
                Masterpieces
              </div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              style={{
                fontSize: "1rem",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#aaaaaa",
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              Art that speaks in the silence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: "800px",
              }}
            >
              <button
                onClick={() => setHasEntered(true)}
                style={{
                  padding: "1.5rem 2.5rem",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ff00aa";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow =
                    "0 0 25px rgba(255,0,170,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#000000";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.3)";
                }}
              >
                To Enter Show
              </button>
              <button
                onClick={() => setShowContact(true)}
                style={{
                  padding: "1.5rem 2.5rem",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ff00aa";
                  e.currentTarget.style.color = "#ff00aa";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(255,0,170,0.3) inset, 0 0 15px rgba(255,0,170,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                To Connect
              </button>
              <button
                onClick={() => setShowShop(true)}
                style={{
                  padding: "1.5rem 2.5rem",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ff00aa";
                  e.currentTarget.style.color = "#ff00aa";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(255,0,170,0.3) inset, 0 0 15px rgba(255,0,170,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                To Own One
              </button>
              <button
                onClick={() => setShowOrder(true)}
                style={{
                  padding: "1.5rem 2.5rem",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ff00aa";
                  e.currentTarget.style.color = "#ff00aa";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(255,0,170,0.3) inset, 0 0 15px rgba(255,0,170,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                To Request a New Order
              </button>
            </motion.div>
          </motion.section>
        ) : (
          <motion.section
            key="showroom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "relative",
              zIndex: 10,
              padding: "4rem 2rem",
              maxWidth: "1600px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "3rem",
                marginBottom: "4rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {categories.map((cat) => (
                <div
                  key={cat}
                  style={{ position: "relative", padding: "0.5rem 1rem" }}
                >
                  <button
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      fontFamily: "serif",
                      fontStyle: "italic",
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      color: activeCategory === cat ? "#ff00aa" : "#888888",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (activeCategory !== cat)
                        e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      if (activeCategory !== cat)
                        e.currentTarget.style.color = "#888888";
                    }}
                  >
                    {cat}
                  </button>
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "10%",
                        right: "10%",
                        height: "3px",
                        backgroundColor: "#ff00aa",
                        borderRadius: "3px",
                        boxShadow: "0 0 10px rgba(255,0,170,0.8)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2.5rem",
                width: "100%",
              }}
            >
              <AnimatePresence mode="popLayout">
                {galleryData[activeCategory].map((item) => (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      backgroundColor: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.05)",
                      padding: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,0,170,0.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.05)")
                    }
                  >
                    <div
                      style={{
                        height: "350px",
                        width: "100%",
                        backgroundColor: "#050505",
                        borderRadius: "8px",
                        overflow: "hidden",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          transition: "transform 0.5s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          color: "#ffffff",
                          textTransform: "uppercase",
                          letterSpacing: "2px",
                          margin: "0 0 0.5rem 0",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#ff00aa",
                          letterSpacing: "1px",
                          margin: 0,
                        }}
                      >
                        {item.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div
              style={{
                marginTop: "5rem",
                textAlign: "center",
                paddingBottom: "3rem",
              }}
            >
              <button
                onClick={() => setHasEntered(false)}
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ff00aa";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(255,0,170,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#000000";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                ← Return to Entrance
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
