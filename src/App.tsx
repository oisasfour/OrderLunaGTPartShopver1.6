import React, { useState, useEffect } from "react";

/*
UI IMPROVED VERSION
- softer colors
- rounded buttons
- modern font
- cleaner spacing
*/

type MenuItem = {
  id: number;
  category: string;
  name: any;
  price: any;
  img: string;
};

export default function App() {
  /* login */

  const [user, setUser] = useState<any>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  /* customer */

  const [name, setName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  /* product */

  const [category, setCategory] = useState("custom");
  const [search, setSearch] = useState("");

  /* cart */

  const [cart, setCart] = useState<any[]>([]);

  /* status */

  const [popup, setPopup] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // กลับหน้าหลักหลังส่ง order

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);

      // reset ปุ่มส่ง
      setSending(false);

      // ล้างตะกร้า
      setCart([]);

      // ล้าง note
      setNote("");

      // ล้าง name
      setName("");

      // ล้าง address
      setAddress("");
      //
    }, 2000);
    return () => clearTimeout(timer);
  }, [submitted]);

  /* popup auto hide */

  useEffect(() => {
    if (!popup) return;
    const t = setTimeout(() => setPopup(""), 2000);
    return () => clearTimeout(t);
  }, [popup]);

  /* login database ข้อมูลล็อคอิน */

  const users: any = {
    // premium

    "9070442316": {
      password: "777777",
      type: "premium",
    },

    "1234": {
      password: "1234",
      type: "premium",
    },

    // partner
    "888888": {
      password: "888888",
      type: "partner",
    },

    // standard (ช่างทั่วไป)
    "7148": {
      //Users
      password: "111111",
      type: "general",
    },

    "9011": {
      //users
      password: "111111",
      type: "general",
    },
  };
  /* load login */

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      const u = JSON.parse(saved);
      setUser(u);
      setCustomerPhone(u.phone);
    }
  }, []);

  /* menu */

  const menuData: MenuItem[] = [
    // --------------------
    // CUSTOMS
    // --------------------

    {
      id: 101,
      category: "custom",
      name: { th: "Performance Parts", en: "Performance Parts" },
      price: { public: 7000, general: 5500, partner: 5300, premium: 5000 },
      img: "https://img2.pic.in.th/Screenshot-2026-02-17-034351.png",
    },
    {
      id: 102,
      category: "custom",
      name: { th: "Stancer Kit", en: "Stancer Kit" },
      price: { general: 1800, partner: 1650, premium: 1500 },
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    },
    {
      id: 103,
      category: "custom",
      name: { th: "Vehicle Wheels Set", en: "Vehicle Wheels Set" },
      price: { general: 1400, partner: 1300, premium: 1200 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-215128.png",
    },
    {
      id: 104,
      category: "custom",
      name: { th: "Cosmetic Parts", en: "Cosmetic Parts" },
      price: { public: 700, general: 520, partner: 480, premium: 450 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-215058.png",
    },
    {
      id: 105,
      category: "custom",
      name: { th: "Lighting Controller", en: "Lighting Controller" },
      price: { general: 500, partner: 480, premium: 450 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-215026.png",
    },
    {
      id: 106,
      category: "custom",
      name: { th: "Extras Kit", en: "Extras Kit" },
      price: { general: 480, partner: 440, premium: 400 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-214954.png",
    },
    {
      id: 107,
      category: "custom",
      name: { th: "Respray Kit", en: "Respray Kit" },
      price: { general: 420, partner: 380, premium: 350 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-214850.png",
    },
    {
      id: 108,

      category: "custom",

      name: {
        th: "Carplay",
        en: "Carplay",
      },

      price: {
        public: 800,
        standard: 800,
        partner: 750,
        premium: 700,
      },

      img: "https://img2.pic.in.th/Screenshot-2026-04-06-214850.png",
    },
    // --------------------
    // MAIN SERVICE
    // --------------------

    {
      id: 201,
      category: "service",
      name: { th: "Repair Kit", en: "Repair Kit" },
      price: { public: 200, general: 180, partner: 170, premium: 160 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212455.png",
    },
    {
      id: 202,
      category: "service",
      name: { th: "Fuel Injector", en: "Fuel Injector" },
      price: { general: 350, partner: 330, premium: 300 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-212409.png",
    },
    {
      id: 203,
      category: "service",
      name: { th: "Power Steering Pump", en: "Power Steering Pump" },
      price: { general: 350, partner: 330, premium: 300 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212341.png",
    },
    {
      id: 204,
      category: "service",
      name: { th: "Electric Motor", en: "Electric Motor" },
      price: { general: 340, partner: 320, premium: 300 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-212501.png",
    },
    {
      id: 205,
      category: "service",
      name: { th: "EV Battery", en: "EV Battery" },
      price: { general: 340, partner: 320, premium: 300 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212351.png",
    },
    {
      id: 206,
      category: "service",
      name: { th: "Alternator", en: "Alternator" },
      price: { general: 320, partner: 300, premium: 280 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212548.png",
    },
    {
      id: 207,
      category: "service",
      name: { th: "Radiator", en: "Radiator" },
      price: { general: 320, partner: 300, premium: 280 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212523.png",
    },
    {
      id: 208,
      category: "service",
      name: { th: "Transmission", en: "Transmission" },
      price: { general: 320, partner: 300, premium: 280 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212507.png",
    },
    {
      id: 209,
      category: "service",
      name: { th: "Brakes", en: "Brakes" },
      price: { general: 300, partner: 280, premium: 260 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212448.png",
    },

    // --------------------
    // CONSUMABLE PARTS
    // --------------------

    {
      id: 301,
      category: "consumable",
      name: { th: "Tires", en: "Tires" },
      price: { general: 180, partner: 160, premium: 150 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-214750.png",
    },
    {
      id: 302,
      category: "consumable",
      name: { th: "Oil Filter", en: "Oil Filter" },
      price: { general: 180, partner: 160, premium: 150 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212532.png",
    },
    {
      id: 303,
      category: "consumable",
      name: { th: "Fuel Filter", en: "Fuel Filter" },
      price: { general: 180, partner: 160, premium: 150 },
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    },
    {
      id: 304,
      category: "consumable",
      name: { th: "Drive Belt", en: "Drive Belt" },
      price: { general: 180, partner: 160, premium: 150 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-214705.png",
    },
    {
      id: 305,
      category: "consumable",
      name: { th: "Brake Pads", en: "Brake Pads" },
      price: { general: 180, partner: 160, premium: 150 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-214628.png",
    },
    {
      id: 306,
      category: "consumable",
      name: { th: "Steering Fluid", en: "Steering Fluid" },
      price: { general: 150, partner: 140, premium: 120 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212438.png",
    },
    {
      id: 307,
      category: "consumable",
      name: { th: "Spark Plugs", en: "Spark Plugs" },
      price: { general: 150, partner: 140, premium: 120 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-214549.png",
    },
    {
      id: 308,
      category: "consumable",
      name: { th: "High Voltage Wiring", en: "High Voltage Wiring" },
      price: { general: 150, partner: 140, premium: 120 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212429.png",
    },
    {
      id: 309,
      category: "consumable",
      name: { th: "Coolant", en: "Coolant" },
      price: { general: 150, partner: 140, premium: 120 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-214454.png",
    },
    {
      id: 310,
      category: "consumable",
      name: { th: "Brake Fluid", en: "Brake Fluid" },
      price: { general: 150, partner: 140, premium: 120 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212538.png",
    },
    {
      id: 311,
      category: "consumable",
      name: { th: "Battery Coolant", en: "Battery Coolant" },
      price: { general: 150, partner: 140, premium: 120 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-212515.png",
    },
    {
      id: 312,
      category: "consumable",
      name: { th: "Air Filter", en: "Air Filter" },
      price: { general: 150, partner: 140, premium: 120 },
      img: "https://img1.pic.in.th/images/Screenshot-2026-04-06-212553.png",
    },
    {
      id: 313,
      category: "consumable",
      name: { th: "Transmission Fluid", en: "Transmission Fluid" },
      price: { general: 150, partner: 140, premium: 120 },
      img: "https://img2.pic.in.th/Screenshot-2026-04-06-212558.png",
    },
  ];

  /* price */

  const getPrice = (item: any) => {
    // ลูกค้าทั่วไป
    if (!user) {
      return item.price.public ?? item.price.standard ?? item.price.general;
    }

    // login
    return item.price[user.type] ?? item.price.standard;
  };

  /* login */

  const login = () => {
    const u = users[phone];
    if (!u) return setPopup("👤ไม่พบผู้ใช้");
    if (u.password != password) return setPopup("❌รหัสไม่ถูกต้อง");
    const data = { phone, type: u.type };
    setUser(data);
    setCustomerPhone(phone);
    localStorage.setItem("user", JSON.stringify(data));
    setShowLogin(false);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  /* cart */

  const add = (item: any) => {
    setCart((prev) => {
      const f = prev.find((p) => p.id == item.id);
      if (f)
        return prev.map((p) =>
          p.id == item.id ? { ...p, qty: Math.min(p.qty + 1, 999) } : p
        );
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const minus = (id: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id == id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const changeQty = (id: number, val: number) => {
    if (val < 1) val = 1;
    if (val > 999) val = 999;
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: val } : p)));
  };

  /* filter */

  const filtered = menuData

    .filter((item) => {
      // public เห็นแค่ 4 ตัว
      if (!user) {
        return (
          [
            "Performance Parts",
            "Cosmetic Parts",
            "Repair Kit",
            "Carplay",
          ].indexOf(item.name.en) !== -1
        );
      }

      // login เห็นตามหมวด
      return item.category === category;
    })

    .filter((item) =>
      item.name.th.toLowerCase().includes(search.toLowerCase())
    );

  /* total */

  const total = cart.reduce((s, i) => s + getPrice(i) * i.qty, 0);

  /* submit */

  const submit = async () => {
    if (!name) return setPopup("📝กรุณาใส่ชื่อ");
    if (!customerPhone) return setPopup("📞กรุณาใส่เบอร์");
    if (!address) return setPopup("📍กรุณาใส่ที่อยู่");
    if (cart.length == 0) return setPopup("🛒ไม่มีสินค้าในตะกร้า");

    setSending(true);

    const order = cart.map((i) => `${i.name.th} x ${i.qty}`).join(", ");

    await fetch(
      "https://script.google.com/macros/s/AKfycbw1VL2Zr4RNI-5OIuV7safZPqN5Wm6ufgpYT1BKIn7inmtHqwa9CHQbLlMJJ8tptXA3pw/exec",
      {
        method: "POST",
        body: JSON.stringify({
          time: new Date().toLocaleString(),
          name,
          phone: customerPhone,
          address,
          customerType: user?.type || "Public",
          order,
          note,
          total,
        }),
      }
    );

    setSubmitted(true);
  };

  /* success */

  if (submitted)
    return (
      <div
        style={{
          padding: 40,

          textAlign: "center",

          fontFamily: "Poppins",
        }}
      >
        <div
          style={{
            background: "white",

            padding: 30,

            borderRadius: 20,

            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#6d4c41" }}>ส่งออเดอร์แล้ว</h2>

          <div>กำลังกลับหน้าเมนู...</div>
        </div>
      </div>
    );

  /* UI */

  return (
    <div
      style={{
        maxWidth: 1920,
        margin: "auto",
        padding: 20,
        background: "#f7efe5",
        fontFamily: "Poppins, Nunito, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <img
            src="https://img1.pic.in.th/images/Lunar_Maiden_GT_Racing_BG.png"
            style={{
              width: 40,
              height: 40,
              objectFit: "contain",
            }}
          />

          <h2 style={{ color: "#6d4c41" }}>LunarGT PartShop 1.6.0</h2>
        </div>

        <button
          onClick={() => setShowLogin(true)}
          style={{
            background: "#a1887f",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: 20,
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "brightness(1.15)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
        >
          {user ? user.type : "login"}
        </button>
      </div>

      {/* login */}

      {showLogin && (
        <div
          style={{
            background: "white",
            padding: 20,
            marginTop: 15,
            borderRadius: 14,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <input
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={login}
            style={mainButton}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "brightness(1.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "brightness(1)")
            }
          >
            login
          </button>

          {user && (
            <button
              onClick={logout}
              style={secondaryButton}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(1)")
              }
            >
              logout
            </button>
          )}
        </div>
      )}

      {/* category */}

      <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
        <button
          onClick={() => setCategory("custom")}
          style={{
            ...tabStyle,

            border:
              category === "custom"
                ? "2px solid #6d4c41"
                : "2px solid transparent",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "brightness(1.15)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
        >
          Customs
        </button>

        <button
          onClick={() => setCategory("service")}
          style={{
            ...tabStyle,

            border:
              category === "service"
                ? "2px solid #6d4c41"
                : "2px solid transparent",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "brightness(1.15)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
        >
          Service
        </button>

        <button
          onClick={() => setCategory("consumable")}
          style={{
            ...tabStyle,

            border:
              category === "consumable"
                ? "2px solid #6d4c41"
                : "2px solid transparent",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "brightness(1.15)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
        >
          Consumable
        </button>
      </div>

      {/* search */}

      <input
        placeholder="ค้นหาสินค้า"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      {/* product */}

      {filtered.map((item) => (
        <div key={item.id} style={cardStyle}>
          <img
            src={item.img}
            style={{
              width: 70,
              height: 70,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />

          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>{item.name.th}</div>
            <div style={{ color: "#6d4c41" }}>{getPrice(item)} ฿</div>

            <button
              onClick={() => add(item)}
              style={addButton}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(1.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(1)")
              }
            >
              เพิ่ม
            </button>
          </div>
        </div>
      ))}

      {/* cart */}

      <h3 style={{ color: "#6d4c41" }}>รายการ</h3>

      {cart.map((i) => (
        <div key={i.id} style={cartRow}>
          {i.name.th}

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => minus(i.id)}
              style={qtyBtn}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(1)")
              }
            >
              -
            </button>

            <input
              type="number"
              value={i.qty}
              min={1}
              max={999}
              onChange={(e) =>
                changeQty(
                  i.id,

                  Number(e.target.value)
                )
              }
              style={{
                width: 60,

                textAlign: "center",

                borderRadius: 8,

                border: "1px solid #ddd",

                padding: 4,
              }}
            />

            <button
              onClick={() => add(i)}
              style={qtyBtn}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(1)")
              }
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h2 style={{ color: "#5d4037" }}>รวม {total} ฿</h2>

      {/* customer */}

      <input
        placeholder="ชื่อลูกค้า"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="เบอร์โทร"
        value={customerPhone}
        onChange={(e) => setCustomerPhone(e.target.value)}
        style={inputStyle}
      />

      <textarea
        placeholder="ที่อยู่"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={inputStyle}
      />

      <textarea
        placeholder="หมายเหตุ"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={inputStyle}
      />

      <button
        onClick={submit}
        disabled={sending}
        style={submitButton}
        onMouseEnter={(e) =>
          (e.currentTarget.style.filter = "brightness(1.15)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
      >
        {sending ? "กำลังส่ง..." : "ส่งออเดอร์"}
      </button>

      {/* popup */}

      {popup && (
        <div style={popupBg}>
          <div style={popupBox}>{popup}</div>
        </div>
      )}
    </div>
  );
}

/* styles */

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 12,
  padding: 12,
  borderRadius: 12,
  border: "1px solid #e0d6c8",
  fontSize: 15,
  boxSizing: "border-box",
};

const cardStyle = {
  display: "flex",
  gap: 12,
  background: "white",
  padding: 12,
  marginTop: 12,
  borderRadius: 16,
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};

const addButton = {
  marginTop: 6,
  background: "#bcaaa4",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: 20,
  cursor: "pointer",
  transition: "0.2s",
};

const mainButton = {
  background: "#8d6e63",
  color: "white",
  border: "none",
  padding: 10,
  borderRadius: 20,
  marginTop: 8,
  cursor: "pointer",
};

const secondaryButton = {
  background: "#d7ccc8",
  border: "none",
  padding: 8,
  borderRadius: 20,
  marginLeft: 8,
  cursor: "pointer",
};

const tabStyle = {
  background: "#efebe9",
  border: "none",
  padding: "8px 14px",
  borderRadius: 20,
  cursor: "pointer",
};

const cartRow = {
  display: "flex",
  justifyContent: "space-between",
  background: "white",
  padding: 10,
  marginTop: 8,
  borderRadius: 12,
};

const qtyBtn = {
  border: "none",
  background: "#d7ccc8",
  borderRadius: 8,
  padding: "4px 8px",
  cursor: "pointer",
};

const submitButton = {
  width: "100%",
  marginTop: 15,
  padding: 14,
  background: "#6d4c41",
  color: "white",
  border: "none",
  borderRadius: 25,
  fontSize: 16,
  cursor: "pointer",
};

const popupBg: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.35)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const popupBox = {
  background: "white",
  padding: 30,
  borderRadius: 20,
  fontSize: 18,
};
