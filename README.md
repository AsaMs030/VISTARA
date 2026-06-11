# VISTARA - Tiles and Paints Designer

تطبيق تفاعلي لتصميم الداخليات باستخدام البلاط والدهان مع تقنيات الواقع المعزز.

## 🎨 الميزات الرئيسية

- 🏷️ **عرض أنواع البلاط**: تصفح جميع أنواع البلاط مع التفاصيل الكاملة
- 🎨 **ألوان الدهان**: اختيار من مئات الألوان ودمج الألوان المخصصة
- ✨ **صمم زاويتك**: استخدام AR لمعاينة البلاط والدهان في مساحتك الفعلية
- 🌍 **دعم متعدد اللغات**: العربية، الإنجليزية، والعبرية
- 👤 **حساب المستخدم**: تسجيل الدخول وحفظ المفضلات والتصميمات
- 💰 **حاسبة التكلفة**: احسب تكلفة مشروعك بناءً على المساحة

## 🛠️ التكنولوجيات المستخدمة

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **3D Graphics**: Three.js
- **AR**: AR.js
- **Internationalization**: i18next
- **Styling**: Custom CSS with Gold Theme

## 📁 هيكل المشروع

```
VISTARA/
├── index.html           # الصفحة الرئيسية
├── style.css            # التصميم الأساسي
├── app.js               # منطق التطبيق الرئيسي
├── i18n.js              # نظام اللغات المتعددة
├── firebase-config.js   # إعدادات Firebase
└── README.md            # هذا الملف
```

## 🚀 البدء السريع

### 1. استنساخ المشروع
```bash
git clone https://github.com/AsaMs030/VISTARA.git
cd VISTARA
```

### 2. إعداد Firebase
1. اذهب إلى [Firebase Console](https://console.firebase.google.com)
2. أنشئ مشروع جديد
3. أنسخ بيانات المشروع واستبدلها في `firebase-config.js`

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 3. تشغيل المشروع
```bash
# استخدم أي خادم محلي (VS Code Live Server مثلاً)
# أو
python -m http.server 8000
```

ثم افتح في المتصفح: `http://localhost:8000`

## 📝 الصفحات الرئيسية

### الصفحة الرئيسية (Home)
- عرض البلاط المميز في شكل رفوف متداخلة
- أزرار سريعة للتنقل بين الأقسام

### صفحة البلاط (Tiles)
- عرض جميع أنواع البلاط
- معلومات تفصيلية عن كل بلاط
- حاسبة التكلفة حسب المساحة
- معلومات عن الإيجابيات والسلبيات

### صفحة الألوان (Colors)
- عرض جميع ألوان الدهان
- دمج الألوان لإنشاء ألوان جديدة
- حفظ الألوان المفضلة

### صمم زاويتك (Design Corner)
- اختيار لون وبلاط
- تصوير الزاوية الفعلية
- معاينة النتيجة النهائية باستخدام AR

## 🔐 المصادقة والأمان

- استخدام Firebase Authentication
- تسجيل دخول آمن بالبريد الإلكتروني وكلمة المرور
- حفظ البيانات في Firestore Database

## 🌐 دعم اللغات

```javascript
// اختر اللغة بسهولة
setLanguage('ar');  // العربية
setLanguage('en');  // الإنجليزية
setLanguage('he');  // العبرية
```

## 📊 إحصائيات المشروع

- **لغات الكود**: JavaScript, HTML, CSS
- **حجم الملفات**: ~50KB (غير مضغوط)
- **المكتبات الخارجية**: Firebase, Three.js, AR.js
- **المتصفحات المدعومة**: Chrome, Firefox, Safari, Edge

## 🎯 المراحل القادمة

- [ ] تحسين تأثيرات AR
- [ ] إضافة صور 3D حقيقية للبلاط
- [ ] تحسين حاسبة التكلفة
- [ ] إضافة تقييمات المنتجات
- [ ] نظام التوصيات الذكية
- [ ] تطبيق موبايل (React Native)

## 🤝 المساهمة

نرحب بالمساهمات! يرجى:

1. Fork المشروع
2. أنشئ فرع جديد (`git checkout -b feature/improvement`)
3. أرسل Pull Request

## 📞 التواصل

- **البريد الإلكتروني**: asams030@gmail.com
- **GitHub**: [@AsaMs030](https://github.com/AsaMs030)

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف LICENSE للتفاصيل

## 🙏 شكر وتقدير

شكر خاص لـ:
- Firebase للخدمات السحابية
- Three.js لمكتبة 3D الرائعة
- AR.js لتقنية الواقع المعزز

---

**VISTARA** - اجعل مساحتك جميلة! ✨
