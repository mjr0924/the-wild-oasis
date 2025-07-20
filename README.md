# 🏨 The Wild Oasis – Hotel Management Dashboard

یک برنامه تحت وب پیشرفته برای مدیریت هتل، طراحی شده با **React** و **Supabase**. این داشبورد به پرسنل هتل امکان مدیریت کابین‌ها، رزروها، مهمان‌ها و تحلیل‌های آماری را در یک محیط حرفه‌ای ارائه می‌دهد.

🔗 **دموی برنامه**: [مشاهده در Netlify](https://the-wild-oasis-mjr.netlify.app/dashboard)

---

## ⚙️ ویژگی‌های کلیدی

- 🔐 **احراز هویت و نقش‌های کاربری**  
  پرسنل هتل می‌تونن با ایمیل و رمز ورود ثبت نام و وارد بشن؛ سطح دسترسی محدود به کارکنان.

- 🛏️ **مدیریت کابین‌ها (Cabins)**  
  قابلیت ایجاد، ویرایش، حذف کابین با آپلود تصویر، ظرفیت، قیمت و تخفیف.

- 📅 **سیستم رزرو (Bookings)**  
  ثبت رزرو با جزئیات: تعداد شب، مهمان، صبحانه، وضعیت ("unconfirmed" / "checked in" / "checked out") و فیلتر دقیق.

- 🔄 **فرایند Check-in/Check-out**  
  امکان ثبت روز ورود/خروج، تأیید پرداخت و افزودن خدمات اضافه مثل صبحانه.

- 👥 **مدیریت مهمان‌ها (Guests)**  
  اطلاعات مهمان‌ها شامل نام، ایمیل، شناسه ملی، ملیت و پرچم کشور.

- 📊 **داشبورد آماری سفارشی**  
  نمایش لحظه‌ای:
  - ورود و خروج مهمانان امروز
  - تراکنش‌ها، رزروها، نرخ اشغال
  - نمودارهای فروش روزانه (هتل + سرویس‌ها)
  - مدت زمان اقامت

- ⚙️ **تنظیمات عمومی**  
  تعریف قیمت صبحانه، حداقل/حداکثر شب رزرو و تعداد مهمان در هر رزرو.

- 🌙 **حالت شب (Dark Mode)**  
  ظاهر حرفه‌ای با سوئیچ روشن/تاریک.

---

## 🧰 تکنولوژی‌های استفاده‌شده

- **React + Vite**
- **React Router**
- **@tanstack/react-query**
- **Supabase** (Authentication, Database, Storage)
- **styled-components**
- **react-hook-form**
- **react-hot-toast**
- **react-icons**
- **date-fns**
- **Recharts**

---

## 🛠️ نصب و اجرا

```bash
# 1. کلون کردن پروژه
git clone https://github.com/mjr0924/the-wild-oasis.git
cd the-wild-oasis

# 2. نصب وابستگی‌ها
npm install

# 3. تنظیم متغیرهای محیطی
cp .env.example .env
```

در فایل `.env`، مقادیر زیر را قرار دهید:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

سپس سرور توسعه را اجرا کنید:

```bash
npm run dev
```

پروژه در آدرس `http://localhost:5173/` قابل مشاهده است.

---

## 👤 اطلاعات ورود نمونه

```
Email: mjr0924@gmail.com
Password: 1234
```

> برای استفاده عملی، لطفاً این اطلاعات را با نمونه واقعی جایگزین کنید یا از Supabase برای ساخت یوزر استفاده نمایید.

---

## 📁 ساختار پروژه

```
src/
├── components/        # کامپوننت‌های قابل استفاده مجدد
├── features/          # بخش‌های موضوع‌محور (bookings, cabins, guests, ...)
├── pages/             # صفحات اصلی برنامه
├── services/          # توابع ارتباط با Supabase
├── ui/                # اجزای رابط کاربری عمومی
├── utils/             # توابع کاربردی
└── App.jsx
```

---

## 🎯 آموخته‌ها

- پیاده‌سازی احراز هویت و مسیرهای محافظت‌شده با Supabase
- مدیریت داده با React Query
- معماری ماژولار و ساختاریافته در React
- کار با دیتابیس ابری و عملیات CRUD
- استفاده حرفه‌ای از styled-components و فرم‌های داینامیک

---

## 🚀 استقرار

پروژه روی **Netlify** دیپلوی شده و قابل استفاده است:

🔗 https://the-wild-oasis-mjr.netlify.app/dashboard

برای دیپلوی خودت:
1. پروژه را در Netlify یا Vercel متصل کن.
2. در بخش Environment variables مقادیر `.env` را وارد کن.
3. اسکریپت build را به صورت زیر قرار بده:
   ```
   npm run build
   ```

---

## 🛡️ لایسنس

منتشر شده تحت مجوز MIT License.

---

## 🙋‍♂️ توسعه‌دهنده

**Mohammad Javad Rezaei**  
🌐 [geekdeveloper.ir](https://geekdeveloper.ir)  
📬 mjr0924@gmail.com

---

## 📌 منبع اصلی آموزش

الهام گرفته از دوره [Build a Full-Stack Web App with Supabase and React](https://academy.dev/projects/the-wild-oasis) توسط Jonas Schmedtmann.
