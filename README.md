# 🎭 ระบบวิเคราะห์อารมณ์จากข้อความด้วย AI

เว็บแอปพลิเคชันที่พัฒนาด้วย Next.js สามารถวิเคราะห์อารมณ์จากข้อความที่ผู้ใช้ป้อนเข้ามาได้แบบเรียลไทม์ ด้วยการใช้โมเดล Machine Learning

## ✨ คุณสมบัติหลัก

- วิเคราะห์อารมณ์จากข้อความแบบเรียลไทม์
- หน้าเว็บสวยงามด้วย Animated Gradient Background
- รองรับการแสดงผลบนทุกขนาดหน้าจอด้วย Tailwind CSS
- เอฟเฟกต์การเลื่อนที่นุ่มนวลด้วย AOS (Animate On Scroll)
- ดีไซน์สมัยใหม่ด้วยเอฟเฟกต์ Glassmorphism
- แสดงผลอารมณ์พร้อม Emoji และสีที่เข้ากับอารมณ์นั้นๆ

## 🎯 อารมณ์ที่ระบบสามารถวิเคราะห์ได้

- 😊 มีความสุข (Happy)  
- 😢 เศร้า (Sad)
- 😠 โกรธ (Angry)
- 😨 กลัว (Fear)
- 😐 เป็นกลาง (Neutral)

## 🛠 เทคโนโลยีที่ใช้

- **Frontend**: Next.js 15.1, React 19
- **การจัดการ Style**: Tailwind CSS
- **UI Components**: 
  - Lucide React สำหรับไอคอน
  - SweetAlert2 สำหรับการแจ้งเตือน
  - AOS สำหรับ Animation
- **เครื่องมือพัฒนา**:
  - TypeScript
  - ESLint
  - PostCSS

## 🚀 การติดตั้งและใช้งาน

1. Clone โปรเจค:
```bash
git clone <repository-url>
cd web-ai-emotion-detection
```

2. ติดตั้ง Dependencies:
```bash
npm install
```

3. รัน Development Server:
```bash
npm run dev
```

4. รัน Backend Server สำหรับวิเคราะห์อารมณ์ (ต้องรันที่พอร์ต 9959)

5. เปิดเว็บไซต์ที่ [http://localhost:3000](http://localhost:3000)

## 📁 โครงสร้างโปรเจค

```
src/
├── app/                # โฟลเดอร์หลักของ Next.js
├── components/         # React Components
│   ├── Background.jsx  # พื้นหลังแบบเคลื่อนไหว
│   └── navbar.jsx      # เมนูนำทาง
├── pages/             # หน้าต่างๆ
│   └── Home.jsx       # หน้าหลักสำหรับวิเคราะห์อารมณ์
```

## 💻 คำสั่งที่ใช้ในการพัฒนา

```bash
# รันในโหมดพัฒนา
npm run dev

# Build สำหรับ Production
npm run build

# รันเซิร์ฟเวอร์ Production
npm run start

# ตรวจสอบโค้ดด้วย Linter
npm run lint
```

## ⚙️ การตั้งค่าระบบ

ต้องมีการติดตั้ง:
- Node.js เวอร์ชั่น 18 ขึ้นไป
- Backend Server ที่รันบน `http://localhost:9959`
