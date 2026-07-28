export type Locale = "en" | "ua"

export const defaultLocale: Locale = "en"

export const STORAGE_KEY = "kd-locale"

export type PortfolioCategoryKey =
  | "All"
  | "Fashion"
  | "Studio"
  | "Beauty"
  | "Art Nude"
  | "Editorial"

export const translations = {
  en: {
    common: {
      swipeHint: "Swipe for more",
    },
    ui: {
      close: "Close",
      next: "Next",
      previous: "Previous",
      details: "Details",
    },
    nav: {
      portfolio: "Portfolio",
      stories: "Stories",
      about: "About",
      booking: "Booking",
      merch: "Merch",
      contact: "Contact",
      book: "Book",
      bookCta: "BOOK",
      bookNow: "Book now",
      scrollToTop: "Scroll to top",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    lang: { en: "EN", ua: "UA" },
    hero: {
      kicker: "International model",
      metaName: "Katrina Dragonfly",
      titleLines: ["Editorial body.", "Cinematic presence."],
      disciplines: "Fashion · Studio · Beauty · Art nude",
      location: "Based in Ukraine / available in Europe",
      bookShoot: "Book a shoot",
      viewPortfolio: "View portfolio",
      scroll: "Scroll",
    },
    intro: {
      label: "02 / In frame",
      headlineLine1: "Light, posture, intention.",
      headlineLine2: "Every frame reads like a quiet editorial.",
      body: "Katrina Dragonfly is an international model working across fashion, studio, beauty and art nude photography — available for selected creative and commercial projects across Ukraine and Europe.",
      caption: "Editorial still, on set",
    },
    portfolio: {
      label: "03 / Focus",
      title: "Portfolio",
      sliderAria: "Swipe through portfolio projects",
      subtitle:
        "Selected work from fashion, studio, beauty and art nude photography",
      modalLabel: "Selected work",
      modalBackdropClose: "Close portfolio",
      categories: {
        All: "All",
        Fashion: "Fashion",
        Studio: "Studio",
        Beauty: "Beauty",
        "Art Nude": "Art nude",
        Editorial: "Editorial",
      } satisfies Record<PortfolioCategoryKey, string>,
      items: {
        "1": {
          title: "Rain guitar",
          detail:
            "Full-body rain editorial — pink electric guitar, wet silk, and cool studio light.",
          location: "Studio",
        },
        "2": {
          title: "Body paint",
          detail:
            "Experimental body-paint study — brushwork, colour, and contemplative posture.",
          location: "Studio",
        },
        "3": {
          title: "Red sofa editorial",
          detail:
            "Wide cinematic frame — red against quilted black leather and warm bulb light.",
          location: "Studio",
        },
        "4": {
          title: "Rain beauty",
          detail: "Close rain portrait with pink guitar — water texture and blue rim light.",
          location: "Studio",
        },
        "5": {
          title: "White bolero",
          detail: "Fashion full-body with wooden chair — studio bulbs and sharp silhouette.",
          location: "Studio",
        },
        "6": {
          title: "Red reclining",
          detail: "Second wide red-dress frame — reclining pose, soft smile, dark leather.",
          location: "Studio",
        },
        "7": {
          title: "Wet beauty",
          detail: "Beauty close-up in rain — translucent fabric and cool blue backlight.",
          location: "Studio",
        },
        "8": {
          title: "White lingerie",
          detail: "Lingerie editorial on a red chair — warm vanity lights and reflective floor.",
          location: "Studio",
        },
        "9": {
          title: "Rain art nude",
          detail: "Art nude rain portrait — warm key light and cool blue rim against black.",
          location: "Studio",
        },
        "10": {
          title: "Paint session",
          detail: "Creative studio frame — paintbrush, colour on skin, and bottles of paint in the foreground.",
          location: "Studio",
        },
        "11": {
          title: "Honey silhouette",
          detail: "High-key art nude still — dripping honey and a sculpted silhouette against white.",
          location: "Studio",
        },
        "12": {
          title: "Paint studio",
          detail: "Wide creative studio scene — a table of paints, colour on skin, and a direct gaze.",
          location: "Studio",
        },
      },
    },
    stories: {
      label: "04 / Stories",
      title: "Visual stories",
      subtitle: "Short editorial sequences — still, precise, cinematic.",
      sliderAria: "Swipe through visual stories",
      viewStory: "View story",
      modalClose: "Close",
      modalBackdropClose: "Close story",
      modalLabel: "Selected story",
      collectionAria: "Story image gallery",
      items: {
        "1": {
          title: "Rain editorial",
          description:
            "A moody studio sequence with rain, electric guitar, and cool blue light.",
          category: "Editorial",
          tags: ["Editorial", "Rain", "Beauty"],
          year: "2025",
          location: "Studio",
        },
        "2": {
          title: "Red sofa series",
          description:
            "Cinematic red against quilted black leather — wide editorial frames from the same set.",
          category: "Editorial",
          tags: ["Editorial", "Fashion", "Studio"],
          year: "2025",
          location: "Studio",
        },
        "3": {
          title: "Paint & form",
          description:
            "Experimental body paint and lingerie editorial — colour, texture, and posture.",
          category: "Art nude",
          tags: ["Art nude", "Editorial", "Beauty"],
          year: "2025",
          location: "Studio",
        },
        "4": {
          title: "Body still life",
          description:
            "Sushi, honey, and light — the body as a quiet still-life canvas in high-key frames.",
          category: "Editorial",
          tags: ["Editorial", "Creative", "Studio"],
          year: "2025",
          location: "Studio",
        },
      },
    },
    about: {
      label: "05 / About",
      title: "Katrina Dragonfly",
      lede: "Model · editorial · studio",
      body: "Katrina Dragonfly is a model available for selected fashion, beauty, studio and art nude projects. Her work is built around expressive posing, soft cinematic presence and a refined visual language.",
      details: {
        location: { label: "Location", value: "Ukraine / Europe" },
        availability: { label: "Availability", value: "Selected bookings" },
        direction: {
          label: "Direction",
          value: "Fashion · Beauty · Studio · Art nude",
        },
        collaboration: {
          label: "Collaboration",
          value: "Photographers, studios, brands",
        },
      },
    },
    modelInfo: {
      label: "06 / Stats",
      title: "Profile & measurements",
      stats: {
        height: "Height",
        bust: "Bust",
        waist: "Waist",
        hips: "Hips",
        hair: "Hair",
        eyes: "Eyes",
        shoe: "Shoe",
        location: "Location",
        availability: "Availability",
      },
      statValues: {
        hairBrown: "Brown",
        eyesBrown: "Brown",
        availability: "International bookings",
        location: "Ukraine / Europe",
      },
    },
    booking: {
      label: "07 / Booking",
      title: "Selected projects",
      body: "Professional collaborations with photographers, studios and brands across fashion, beauty and creative photography.",
      instagram: "Book via Instagram",
      telegram: "Contact on Telegram",
      services: {
        "01": "Fashion shoots",
        "02": "Studio sessions",
        "03": "Beauty campaigns",
        "04": "Lingerie / boudoir",
        "05": "Art nude projects",
        "06": "Brand collaborations",
        "07": "Creative photo & video",
      },
    },
    merch: {
      label: "08 / Merch",
      title: "Merch",
      sliderAria: "Swipe through merch",
      subtitle: "Small personal drops inspired by Katrina's visual world",
      order: "Order via Telegram",
      modalBackdropClose: "Close product",
      availability: "Limited drops — ask on Telegram for availability.",
      items: {
        "1": {
          name: "Signature print",
          description: "Limited edition fine art print, signed and numbered.",
        },
        "2": {
          name: "Photo card set",
          description: "Collectible set of 12 premium photo cards.",
        },
        "3": {
          name: "Limited T-shirt",
          description: "Premium cotton tee with exclusive artwork.",
        },
        "4": {
          name: "Poster drop",
          description: "Large format poster from the latest editorial series.",
        },
      },
    },
    contact: {
      label: "09 / Contact",
      hubMeta: "Bookings & enquiries",
      headlineLine1: "Let’s build a frame",
      headlineLine2: "that lingers.",
      sub: "Bookings, collaborations and selected commercial work — direct lines below.",
      channels: {
        instagram: "Instagram",
        telegram: "Telegram",
        email: "Email",
        phone: "Phone",
      },
    },
    footer: {
      tagline: "International model portfolio",
      navigation: "Navigation",
      legal:
        "All visual content is artistic and editorial. Katrina Dragonfly is 18+. No explicit services are offered.",
    },
    mobileMenu: {
      meta1: "International model",
      meta2: "Ukraine / Europe",
    },
  },
  ua: {
    common: {
      swipeHint: "Гортайте далі",
    },
    ui: {
      close: "Закрити",
      next: "Далі",
      previous: "Назад",
      details: "Деталі",
    },
    nav: {
      portfolio: "Портфоліо",
      stories: "Історії",
      about: "Про мене",
      booking: "Бронювання",
      merch: "Мерч",
      contact: "Контакти",
      book: "Запис",
      bookCta: "ЗАПИС",
      bookNow: "Записатися",
      scrollToTop: "До початку сторінки",
      openMenu: "Відкрити меню",
      closeMenu: "Закрити меню",
    },
    lang: { en: "EN", ua: "UA" },
    hero: {
      kicker: "Міжнародна модель",
      metaName: "Katrina Dragonfly",
      titleLines: ["Тіло.", "Кадр.", "Присутність."],
      disciplines: "Фешн · Студія · Бʼюті · Арт-ню",
      location: "База в Україні / зйомки в Європі",
      bookShoot: "Забронювати зйомку",
      viewPortfolio: "Дивитися портфоліо",
      scroll: "Гортайте",
    },
    intro: {
      label: "02 / У кадрі",
      headlineLine1: "Світло, пластика, намір.",
      headlineLine2: "Кожен кадр читається як тиха редакція.",
      body: "Katrina Dragonfly — міжнародна модель у фешн, студійній, бʼюті та арт-ню зйомці. Доступна для відібраних креативних і комерційних проєктів в Україні та Європі.",
      caption: "Редакційний кадр, зйомка",
    },
    portfolio: {
      label: "03 / Фокус",
      title: "Портфоліо",
      sliderAria: "Гортайте проєкти портфоліо",
      subtitle:
        "Відібрані роботи з фешн, студійної, бʼюті та арт-ню фотографії",
      modalLabel: "Обрана робота",
      modalBackdropClose: "Закрити портфоліо",
      categories: {
        All: "Усі",
        Fashion: "Фешн",
        Studio: "Студія",
        Beauty: "Бʼюті",
        "Art Nude": "Арт-ню",
        Editorial: "Редакція",
      } satisfies Record<PortfolioCategoryKey, string>,
      items: {
        "1": {
          title: "Гітара під дощем",
          detail:
            "Повнозростова редакція під дощем — рожева електрогітара, мокрий шовк і холодне студійне світло.",
          location: "Студія",
        },
        "2": {
          title: "Боді-пейнт",
          detail:
            "Експериментальний боді-пейнт — мазки, колір і спокійна пластика.",
          location: "Студія",
        },
        "3": {
          title: "Червона софа",
          detail:
            "Широкий кінематографічний кадр — червоне на стьобаній чорній шкірі й тепле світло ламп.",
          location: "Студія",
        },
        "4": {
          title: "Бʼюті під дощем",
          detail: "Близький портрет під дощем із рожевою гітарою — фактура води й синє контрове світло.",
          location: "Студія",
        },
        "5": {
          title: "Біле болеро",
          detail: "Фешн у повний зріст із деревʼяним стільцем — студійні лампи й чіткий силует.",
          location: "Студія",
        },
        "6": {
          title: "Червоне на софі",
          detail: "Другий широкий кадр у червоному — лежача поза, мʼяка посмішка, темна шкіра.",
          location: "Студія",
        },
        "7": {
          title: "Мокрий бʼюті",
          detail: "Бʼюті-крупний план під дощем — напівпрозора тканина й холодний синій задній план.",
          location: "Студія",
        },
        "8": {
          title: "Біла білизна",
          detail: "Білизна на червоному стільці — теплі vanity-лампи й дзеркальна підлога.",
          location: "Студія",
        },
        "9": {
          title: "Арт-ню під дощем",
          detail: "Арт-ню портрет під дощем — тепле ключове й холодне синє контрове світло.",
          location: "Студія",
        },
        "10": {
          title: "Сесія з фарбою",
          detail: "Креативний студійний кадр — пензель, колір на шкірі та пляшки з фарбою на передньому плані.",
          location: "Студія",
        },
        "11": {
          title: "Медовий силует",
          detail: "Хай-кі арт-ню натюрморт — мед, що стікає, і скульптурний силует на білому.",
          location: "Студія",
        },
        "12": {
          title: "Студія фарби",
          detail: "Широкий креативний студійний кадр — стіл із фарбами, колір на шкірі й прямий погляд.",
          location: "Студія",
        },
      },
    },
    stories: {
      label: "04 / Історії",
      title: "Візуальні історії",
      subtitle: "Короткі редакційні наративи — статично й кінематографічно.",
      sliderAria: "Гортайте візуальні історії",
      viewStory: "Дивитися історію",
      modalClose: "Закрити",
      modalBackdropClose: "Закрити історію",
      modalLabel: "Обрана історія",
      collectionAria: "Галерея кадрів історії",
      items: {
        "1": {
          title: "Редакція під дощем",
          description:
            "Настроєва студійна серія з дощем, електрогітарою та холодним синім світлом.",
          category: "Редакція",
          tags: ["Редакція", "Дощ", "Бʼюті"],
          year: "2025",
          location: "Студія",
        },
        "2": {
          title: "Серія червона софа",
          description:
            "Кінематографічний червоний на стьобаній чорній шкірі — широкі редакційні кадри однієї зйомки.",
          category: "Редакція",
          tags: ["Редакція", "Фешн", "Студія"],
          year: "2025",
          location: "Студія",
        },
        "3": {
          title: "Фарба і форма",
          description:
            "Експериментальний боді-пейнт і білизна — колір, фактура й пластика.",
          category: "Арт-ню",
          tags: ["Арт-ню", "Редакція", "Бʼюті"],
          year: "2025",
          location: "Студія",
        },
        "4": {
          title: "Тіло як натюрморт",
          description:
            "Суші, мед і світло — тіло як тихе полотно натюрморту в хай-кі кадрах.",
          category: "Редакція",
          tags: ["Редакція", "Креатив", "Студія"],
          year: "2025",
          location: "Студія",
        },
      },
    },
    about: {
      label: "05 / Про мене",
      title: "Katrina Dragonfly",
      lede: "Модель · редакція · студія",
      body: "Katrina Dragonfly — модель для відібраних фешн, бʼюті, студійних та арт-ню проєктів. Робота побудована на виразній пластиці, мʼякій кінематографічній присутності та витонченій візуальній мові.",
      details: {
        location: { label: "Локація", value: "Україна / Європа" },
        availability: { label: "Доступність", value: "Обрані бронювання" },
        direction: {
          label: "Напрям",
          value: "Фешн · Бʼюті · Студія · Арт-ню",
        },
        collaboration: {
          label: "Співпраця",
          value: "Фотографи, студії, бренди",
        },
      },
    },
    modelInfo: {
      label: "06 / Параметри",
      title: "Профіль і мірки",
      stats: {
        height: "Зріст",
        bust: "Груди",
        waist: "Талія",
        hips: "Стегна",
        hair: "Волосся",
        eyes: "Очі",
        shoe: "Взуття",
        location: "Локація",
        availability: "Доступність",
      },
      statValues: {
        hairBrown: "Шатен",
        eyesBrown: "Карі",
        availability: "Міжнародні бронювання",
        location: "Україна / Європа",
      },
    },
    booking: {
      label: "07 / Бронювання",
      title: "Обрані проєкти",
      body: "Професійна співпраця з фотографами, студіями та брендами у фешн, бʼюті та креативній фотографії.",
      instagram: "Запис у Instagram",
      telegram: "Написати в Telegram",
      services: {
        "01": "Фешн-зйомки",
        "02": "Студійні сесії",
        "03": "Бʼюті-кампанії",
        "04": "Білизна / будуар",
        "05": "Проєкти арт-ню",
        "06": "Колаборації з брендами",
        "07": "Креативне фото та відео",
      },
    },
    merch: {
      label: "08 / Мерч",
      title: "Мерч",
      sliderAria: "Гортайте мерч",
      subtitle: "Невеликі дропи, натхненні візуальним світом Katrina",
      order: "Замовити в Telegram",
      modalBackdropClose: "Закрити товар",
      availability: "Лімітовані дропи — уточнюйте наявність у Telegram.",
      items: {
        "1": {
          name: "Авторський принт",
          description: "Лімітований арт-принт з підписом і нумерацією.",
        },
        "2": {
          name: "Набір фотокарток",
          description: "Колекційний набір із 12 преміальних карток.",
        },
        "3": {
          name: "Лімітований T-shirt",
          description: "Преміальна бавовна з ексклюзивним принтом.",
        },
        "4": {
          name: "Постер-дроп",
          description: "Широкоформатний постер з останньої редакційної серії.",
        },
      },
    },
    contact: {
      label: "09 / Контакти",
      hubMeta: "Букінг і запити",
      headlineLine1: "Знімемо кадр,",
      headlineLine2: "що залишиться з вами.",
      sub: "Букінг, колаборації й обрана комерція — напряму нижче.",
      channels: {
        instagram: "Instagram",
        telegram: "Telegram",
        email: "Email",
        phone: "Телефон",
      },
    },
    footer: {
      tagline: "Портфоліо міжнародної моделі",
      navigation: "Навігація",
      legal:
        "Увесь візуальний контент має художній та редакційний характер. Katrina Dragonfly — 18+. Жодні відверті послуги не пропонуються.",
    },
    mobileMenu: {
      meta1: "Міжнародна модель",
      meta2: "Україна / Європа",
    },
  },
} as const

export type TranslationTree = (typeof translations)[Locale]
