"use client";
// Import libraries ที่จำเป็น
import React, { useState, useEffect } from "react";
import { MessageSquare, Send } from "lucide-react"; // Import icons
import Swal from "sweetalert2"; // สำหรับแสดง popup แจ้งเตือน
import AOS from "aos"; // สำหรับ scroll animation
import "aos/dist/aos.css";

const Home = () => {
  // State สำหรับเก็บข้อความและสถานะต่างๆ
  const [formData, setFormData] = useState({
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // สถานะการส่งข้อมูล
  const [emotion, setEmotion] = useState(""); // เก็บอารมณ์ที่ได้จาก API

  // จัดการการเปลี่ยนแปลงข้อความใน textarea
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ฟังก์ชันสำหรับเลือก emoji ตามอารมณ์
  const getEmotionIcon = (emotion) => {
    switch (emotion.toLowerCase()) {
      case 'happy': return '😊';
      case 'sad': return '😢';
      case 'angry': return '😠';
      case 'fear': return '😨';
      case 'neutral': return '😐';
      default: return '🤔';
    }
  };

  // ฟังก์ชันสำหรับเลือกสีตามอารมณ์
  const getEmotionColor = (emotion) => {
    switch (emotion.toLowerCase()) {
      case 'happy': return '#4ade80'; // สีเขียว - ความสุข
      case 'sad': return '#60a5fa'; // สีฟ้า - ความเศร้า
      case 'angry': return '#ef4444'; // สีแดง - ความโกรธ
      case 'fear': return '#a855f7'; // สีม่วง - ความกลัว
      case 'neutral': return '#6366f1'; // สีน้ำเงิน - เป็นกลาง
      default: return '#6366f1';
    }
  };

  // ฟังก์ชันจัดการการส่งข้อมูล
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // เข้ารหัสข้อความก่อนส่งไป API
      const encodedText = encodeURIComponent(btoa(String.fromCharCode(...new TextEncoder().encode(formData.message))));
      // เรียก API เพื่อวิเคราะห์อารมณ์
      const response = await fetch(`https://api-emotion-detection.hoshizora.online/?text=${encodedText}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // แปลงข้อมูลที่ได้จาก API
      const data = await response.json();
      const emotionIcon = getEmotionIcon(data.result);
      const emotionColor = getEmotionColor(data.result);

      setEmotion(data.result);

      // แสดง popup ผลการวิเคราะห์
      Swal.fire({
        title: `${emotionIcon} ตรวจพบอารมณ์!`,
        html: `
          <div style="margin-top: 1rem;">
            <p style="font-size: 1.1rem; color: #666;">ข้อความของคุณ:</p>
            <p style="margin: 0.5rem 0; padding: 0.75rem; background: #f8f9fa; border-radius: 0.5rem; color: #333;">"${formData.message}"</p>
            <p style="font-size: 1.25rem; margin-top: 1rem; color: ${emotionColor};">
              อารมณ์ที่ตรวจพบคือ: <strong>${data.result}</strong>
            </p>
          </div>
        `,
        icon: 'success',
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#6366f1',
        showCloseButton: true,
        customClass: {
          popup: 'animated fadeInDown'
        }
      });

    } catch (error) {
      // จัดการกรณีเกิดข้อผิดพลาด
      console.error('Error:', error);
      Swal.fire({
        title: '❌ เกิดข้อผิดพลาด!',
        text: 'ไม่สามารถวิเคราะห์อารมณ์ได้',
        icon: 'error',
        confirmButtonText: 'ลองใหม่',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setIsSubmitting(false); // รีเซ็ตสถานะการส่งข้อมูล
    }
  };

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  // ส่วนแสดงผล UI
  return (
    <>
      <div className="pt-8 ">
        <div className="mt-20 mb-20 text-center pb-10" data-aos="fade-up" data-aos-duration="800">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            {/* Ai Emotion Detection */}
          </h2>
        </div>

      <div
        className="flex justify-center min-h-9/10 bg-cover bg-center bg-no-repeat "
        id="Contact"
      >
        <div className="px-[1%] lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12 bg-gradient-to-br">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className=" bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#a955f767] "
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  How do you feel now?
                </h2>
                <p className="text-gray-400">
                  Have something to discuss? Send me a message and let's talk.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  disabled={isSubmitting}
                  className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-back focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                  required
                />
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;