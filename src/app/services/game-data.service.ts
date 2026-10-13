import { Injectable, signal } from '@angular/core';
import { GameItem, TeamMember, QuestJob, BlogArticle, Testimonial } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  games = signal<GameItem[]>([
    {
      id: 'wayang-2099',
      title: 'WAYANG 2099',
      subtitle: 'SHADOW PROTOCOL',
      genre: 'Cyberpunk Action-RPG',
      status: 'In Development',
      rarity: 'Legendary',
      rating: 4.9,
      releaseDate: 'Q4 2026',
      platforms: ['PC / Steam', 'PlayStation 5', 'Xbox Series X'],
      shortDesc: 'Menyusup ke megacity Jakarta 2099 sebagai Ki Dalang Cybernetic. Kendalikan marionette sintetis bertenaga karsa neon dalam perang bayangan antar-korporasi.',
      fullDesc: 'Wayang 2099: Shadow Protocol menggabungkan aksi silat futuristik cepat dengan sistem taktis pertempuran bayangan. Pemain mengendalikan Ki Dalang Arya, seorang agen rahasia yang dapat memproyeksikan karsa energi ke dalam 5 Wayang Avatar berkemampuan khusus (Bima Synth, Arjuna Railgun, Srikandi Pulse Blade, Ghatotkacha Exo-Armor, dan Semar Data-Hacker). Ditenagai oleh Unreal Engine 5 dengan fitur ray-tracing realistis untuk lanskap hujan neon Kota Tua 2099.',
      accentColor: '#8B5CF6',
      coverImage: 'game_wayang_cyberpunk',
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      features: [
        'Sistem Pertempuran Karsa: Proyeksikan 5 Wayang Avatar secara instan di tengah kombo',
        'Lanskap Hujan Neon Jakarta 2099: Eksplorasi open-world vertikal Glodok Cyber & Monas Void',
        'Naratif Non-Linear: 12 Cabang takdir dengan ending moralitas abu-abu',
        'Audio Sintesis Gamelan Electro: Score orisinal buatan komposer pemenang penghargaan'
      ],
      specs: {
        minimum: {
          os: 'Windows 11 64-bit',
          cpu: 'Intel Core i5-12400F / AMD Ryzen 5 5600X',
          ram: '16 GB RAM',
          gpu: 'NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600',
          storage: '85 GB SSD space'
        },
        recommended: {
          os: 'Windows 11 64-bit',
          cpu: 'Intel Core i7-14700K / AMD Ryzen 7 7800X3D',
          ram: '32 GB RAM',
          gpu: 'NVIDIA GeForce RTX 4080 Super / AMD Radeon RX 7900 XTX',
          storage: '85 GB NVMe M.2 SSD'
        }
      },
      screenshots: [
        'game_wayang_cyberpunk',
        'hero_nusantara_neon',
        'game_borobudur_relics'
      ],
      stats: [
        { metric: 'Wishlist Steam', value: '420,000+' },
        { metric: 'Penghargaan E3/Gamescom', value: '3x Best Indie Horizon' },
        { metric: 'Target Frame-Rate', value: '4K @ 120 FPS' }
      ]
    },
    {
      id: 'borobudur-relics',
      title: 'BOROBUDUR',
      subtitle: 'RELICS OF ETERNITY',
      genre: 'Sci-Fi Puzzle Adventure',
      status: 'Released',
      rarity: 'Epic',
      rating: 4.8,
      releaseDate: 'Q1 2026',
      platforms: ['PC / Steam', 'PlayStation 5', 'Nintendo Switch 2'],
      shortDesc: 'Arahkan laser kuantum dan selaraskan stupa raksasa floating island Candi Borobudur untuk merekonstruksi memori galaksi purba yang hilang.',
      fullDesc: 'Sebuah mahakarya teka-teki perspektif 3D yang berlatar di kepulauan stupa melayang di atas Samudra Kuantum. Sebagai Arkeolog Bintang Citra, Anda harus memecahkan mekanisme kunci relik kosmologis menggunakan friksi cahaya dan frekuensi suara gamelan kuantum.',
      accentColor: '#FF3D8B',
      coverImage: 'game_borobudur_relics',
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      features: [
        'Mekanisme Manipulasi Cahaya Kuantum & Stupa Refraksi',
        '72 Tingkat Candi Melayang dengan Tingkat Kesulitan Adaptif',
        'Desain Audio Binaural 3D Relaksasi Ambient',
        'Mode Fotografi Sinematik Lengkap dengan Filter Batik'
      ],
      specs: {
        minimum: {
          os: 'Windows 10/11 64-bit',
          cpu: 'Intel Core i3-10100 / AMD Ryzen 3 3300X',
          ram: '8 GB RAM',
          gpu: 'NVIDIA GTX 1660 / AMD RX 580',
          storage: '30 GB SSD space'
        },
        recommended: {
          os: 'Windows 11 64-bit',
          cpu: 'Intel Core i5-13600K / AMD Ryzen 5 7600X',
          ram: '16 GB RAM',
          gpu: 'NVIDIA RTX 3070 / AMD RX 6700 XT',
          storage: '30 GB NVMe SSD'
        }
      },
      screenshots: [
        'game_borobudur_relics',
        'game_dayak_borneo',
        'hero_nusantara_neon'
      ],
      stats: [
        { metric: 'Skor Review Steam', value: '96% Overwhelmingly Positive' },
        { metric: 'Salinan Terjual', value: '1,200,000+ Units' },
        { metric: 'Komunitas Modder', value: '250+ Custom Levels' }
      ]
    },
    {
      id: 'dayak-borneo',
      title: 'DAYAK',
      subtitle: 'GUARDIANS OF BORNEO',
      genre: 'Dark Fantasy Hack & Slash',
      status: 'Released',
      rarity: 'Rare',
      rating: 4.7,
      releaseDate: 'Q3 2025',
      platforms: ['PC / Steam', 'PlayStation 5', 'Xbox Series X/S'],
      shortDesc: 'Bertarunglah bersama para Panglima Burung melawan invasi entitas korupsi besi hitam di kedalaman rimba kuno Kalimantan.',
      fullDesc: 'Pengalaman aksi hack & slash cepat berkecepatan tinggi. Gunakan Mandau Rawa yang terinfusi tato spiritual rune cyan untuk menebas roh jahat dan mekanoid kuno.',
      accentColor: '#22D3EE',
      coverImage: 'game_dayak_borneo',
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      features: [
        'Kombinasi Tebasan Mandau & Perisai Talawang Parry System',
        'Transformation Spirit Form: Berubah menjadi Garuda Rune Emas',
        'Sistem Tato Rune Perk kustomisasi skill tanpa batas',
        'Co-Op Multiplayer Raid Boss hingga 4 Pemain'
      ],
      specs: {
        minimum: {
          os: 'Windows 10 64-bit',
          cpu: 'Intel Core i5-9400F / AMD Ryzen 5 2600',
          ram: '12 GB RAM',
          gpu: 'NVIDIA GTX 1070 / AMD RX 5600 XT',
          storage: '50 GB SSD space'
        },
        recommended: {
          os: 'Windows 11 64-bit',
          cpu: 'Intel Core i7-12700 / AMD Ryzen 7 5800X',
          ram: '16 GB RAM',
          gpu: 'NVIDIA RTX 3080 / AMD RX 6800 XT',
          storage: '50 GB NVMe SSD'
        }
      },
      screenshots: [
        'game_dayak_borneo',
        'game_wayang_cyberpunk',
        'hero_nusantara_neon'
      ],
      stats: [
        { metric: 'Pemain Aktif Harian', value: '45,000+ Players' },
        { metric: 'Penghargaan Game of the Year SEAsia', value: 'Winner 2025' },
        { metric: 'Kecepatan Pertempuran', value: 'Smooth 60-144 FPS' }
      ]
    },
    {
      id: 'nusantara-sky',
      title: 'NUSANTARA',
      subtitle: 'KINGDOM OF SKY',
      genre: 'Multiplayer Tactical Air-Warfare',
      status: 'Beta',
      rarity: 'Epic',
      rating: 4.6,
      releaseDate: 'Q2 2027',
      platforms: ['PC / Steam', 'PlayStation 5'],
      shortDesc: 'Kendalikan kapal udara Zeppelin raksasa berornamentasi ukiran kayu emas dalam pertempuran arena udara 32v32.',
      fullDesc: 'Pertempuran udara masif yang menggabungkan kemudi kapal udara armada kerajaan dengan pertempuran meriam plasma karsa di atas awan stratosfer.',
      accentColor: '#FBBF24',
      coverImage: 'hero_nusantara_neon',
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      features: [
        'Arena Udara 32v32 Real-Time Masif',
        'Kustomisasi Kapal Udara: Lambung Kayu Jati Cyber, Layar Sutra Energi',
        'Sistem Cuaca Dinamis Badai Petir Karsa',
        'Cross-Play Penuh antara PC dan Konsol'
      ],
      specs: {
        minimum: {
          os: 'Windows 11 64-bit',
          cpu: 'Intel Core i5-11400 / AMD Ryzen 5 3600',
          ram: '16 GB RAM',
          gpu: 'NVIDIA RTX 2060 / AMD RX 6600',
          storage: '60 GB SSD space'
        },
        recommended: {
          os: 'Windows 11 64-bit',
          cpu: 'Intel Core i7-13700K / AMD Ryzen 7 7700X',
          ram: '32 GB RAM',
          gpu: 'NVIDIA RTX 4070 Ti / AMD RX 7900 XT',
          storage: '60 GB NVMe SSD'
        }
      },
      screenshots: [
        'hero_nusantara_neon',
        'game_borobudur_relics',
        'game_wayang_cyberpunk'
      ],
      stats: [
        { metric: 'Pendaftar Closed Beta', value: '180,000+ Pilots' },
        { metric: 'Skala Arena Udara', value: '16 km² Seamless Map' },
        { metric: 'Dedicated Server Latency', value: '< 15ms SEAsia' }
      ]
    }
  ]);

  teamMembers = signal<TeamMember[]>([
    {
      id: 'raden-arya',
      name: 'Raden Arya Putra',
      role: 'Studio Creative Director & Co-Founder',
      rpgClass: 'Cyber Alchemist',
      level: 99,
      stats: { str: 95, int: 98, cre: 100 },
      quote: 'Kami tidak sekadar membuat game; kami membangun mitologi masa depan yang bernapas.',
      lore: 'Mantan Senior Lead Designer di studio AAA Eropa yang pulang ke Tanah Air untuk membangun Nusantara Neon. Bertekad membawa estetika lokal ke panggung global.',
      avatarSvg: 'KIPA_CREATIVE',
      socials: { twitter: '#', linkedin: '#', artstation: '#' }
    },
    {
      id: 'siti-kirana',
      name: 'Dr. Siti Kirana, Ph.D.',
      role: 'Chief Technology Officer & Engine Lead',
      rpgClass: 'Engine Wizard',
      level: 96,
      stats: { str: 92, int: 100, cre: 88 },
      quote: 'Kode yang bersih adalah fondasi di mana keajaiban visual dapat terbang bebas.',
      lore: 'Pakar rendering grafik 3D lulusan MIT. Memimpin pengembangan custom shader photogrammetry dan real-time lighting untuk sistem parry dan karsa neon.',
      avatarSvg: 'KIPA_TECH',
      socials: { github: '#', twitter: '#', linkedin: '#' }
    },
    {
      id: 'bayan-dayak',
      name: 'Bayan Kusuma',
      role: 'Principal Art Director & Concept Artist',
      rpgClass: 'Pixel Artisan',
      level: 94,
      stats: { str: 85, int: 88, cre: 99 },
      quote: 'Garis batik parang memiliki irama matematika yang sama dengan desain mecha futuristik.',
      lore: 'Pelukis tradisional yang mempelajari modeling 3D ZBrush & Substance Painter. Menggabungkan motif ukiran Dayak dan Toraja dengan arsitektur Cyberpunk.',
      avatarSvg: 'KIPA_ART',
      socials: { artstation: '#', twitter: '#' }
    },
    {
      id: 'dewi-gamelan',
      name: 'Dewi Sekar',
      role: 'Audio Director & Gamelan Composer',
      rpgClass: 'Sound Sculptor',
      level: 92,
      stats: { str: 82, int: 94, cre: 96 },
      quote: 'Suara gong perunggu yang direkam dalam ruang anechoic melahirkan frekuensi neon tak tertandingi.',
      lore: 'Komposer musik eksperimental yang menggabungkan rekaman pita gamelan asli Solo dengan synth modular Moog & plugin Wwise spatial audio.',
      avatarSvg: 'KIPA_AUDIO',
      socials: { twitter: '#', linkedin: '#' }
    }
  ]);

  questJobs = signal<QuestJob[]>([
    {
      id: 'q-01',
      title: 'Senior Unreal Engine 5 C++ Architect',
      department: 'Game Engineering',
      difficulty: 'LEGENDARY',
      location: 'Jakarta Studio (Hybrid)',
      type: 'Full-time',
      xpReward: 5000,
      perks: ['Gaji Standar Global AAA', 'Bonus Royalti Penjualan Game', 'Peralatan RTX 4090 Workstation', 'Gym & Unlimited Espresso Bar'],
      description: 'Mencari arsitek C++ berpengalaman untuk memimpin optimasi performa core gameplay, custom shader HLSL, dan networking multiplayer di UE5.',
      requirements: [
        'Minimal 5+ tahun pengalaman dengan C++ dan Unreal Engine core architecture',
        'Pernah merilis minimal 1 judul game konsol/PC AAA',
        'Memahami memory optimization, multithreading, dan profiler Unreal Insights'
      ]
    },
    {
      id: 'q-02',
      title: 'Lead 3D Character Artist (Mecha & Cyber-Organic)',
      department: 'Game Art & 3D',
      difficulty: 'HARD',
      location: 'Jakarta Studio (Hybrid)',
      type: 'Full-time',
      xpReward: 4200,
      perks: ['Wacom Cintiq Pro 27 Disediakan', 'Sesi Masterclass Internasional', 'Asuransi Kesehatan Keluarga Full-Coverage'],
      description: 'Ciptakan karakter cyborg wayang dan monster mekanoid bernuansa Nusantara dengan detail tekstur 8K photorealistic.',
      requirements: [
        'Portofolio ZBrush, Substance 3D Painter, dan Maya/Blender yang kuat',
        'Pemahaman mendalam tentang anatomi manusia & mekanik rupa mecha',
        'Pengalaman dengan pipeline character rigging & Unreal Shader Graph'
      ]
    },
    {
      id: 'q-03',
      title: 'Senior Lorewriter & World Builder',
      department: 'Lore & Narrative',
      difficulty: 'EASY',
      location: 'Remote (Southeast Asia)',
      type: 'Full-time',
      xpReward: 3500,
      perks: ['100% Remote Work Flexible', 'Tunjangan Buku & Riset Budaya', 'Libur Cuti 25 Hari Per Tahun'],
      description: 'Rancang naskah dialog interaktif, artikel Codex, dan sejarah fiksi distopia Jakarta 2099 yang kaya dialog bercabang.',
      requirements: [
        'Portofolio penulisan naratif game (Twine, Ink, Articy:Draft, atau Screenplay)',
        'Kecintaan mendalam pada sejarah, mitologi Nusantara, dan literatur Sci-Fi',
        'Fasih berbahasa Indonesia dan Inggris dengan gaya puitis berkarakter'
      ]
    },
    {
      id: 'q-04',
      title: 'Adaptive Sound Designer (Wwise / FMOD)',
      department: 'Audio & Music',
      difficulty: 'HARD',
      location: 'Bali Lab',
      type: 'Full-time',
      xpReward: 3900,
      perks: ['Akses Studio Rekaman Dolby Atmos Bali', 'Kamera & Mobile Recording Field Gear Provided'],
      description: 'Rancang foley senjata karsa neon, efek suara atmosferik candi melayang, dan implementasi audio spasial Wwise.',
      requirements: [
        'Keahlian tinggi dengan Wwise/FMOD dan DAW (Pro Tools / Reaper)',
        'Kemampuan merekam foley organik dan sintesis suara futuristik'
      ]
    }
  ]);

  blogArticles = signal<BlogArticle[]>([
    {
      id: 'b-01',
      title: 'Arsitektur Karsa Engine: Menggabungkan Shading Photogrammetry Candi dengan Ray-Tracing UE5',
      category: 'Tech Breakdown',
      readTime: '6 min read',
      date: '10 Oktober 2026',
      author: 'Dr. Siti Kirana',
      summary: 'Bagaimana tim engine kami memindai 4,000+ relief batu candi asli menggunakan 3D LiDAR dan menerjemahkannya ke dalam real-time shader 120 FPS.',
      content: 'Proses membawa situs bersejarah Nusantara ke dalam era game AAA membutuhkan keseimbangan antara keakuratan arkeologis dan performa visual yang sangat tajam. Menggunakan teknik Photogrammetry multicamera, kami memindai batuan andesit asli dan menciptakan Nanite Mesh yang diinfusi dengan Nanite Tessellation terbaru.',
      codeSnippet: `// HLSL Custom Karsa Glow Shader Snippet
float3 CalculateBatikNeonGlow(float2 uv, float3 baseColor, float time) {
    float parangPattern = sin(uv.x * 20.0 + uv.y * 20.0 + time * 3.0);
    float glowFactor = smoothstep(0.4, 0.9, parangPattern);
    float3 neonCyan = float3(0.133, 0.827, 0.933);
    return lerp(baseColor, neonCyan * 2.5, glowFactor * 0.45);
}`
    },
    {
      id: 'b-02',
      title: 'Merancang Musik Gamelan Cyberpunk: Rekaman Pita Analog Berpadu Synth Modular',
      category: 'Sound Design',
      readTime: '4 min read',
      date: '28 September 2026',
      author: 'Dewi Sekar',
      summary: 'Eksperimentasi frekuensi perunggu kuno yang dilewatkan pada filter kaset terdistorsi untuk menghasilkan identitas audio Nusantara Neon.',
      content: 'Gamelan bukan sekadar alat musik; instrumen ini memiliki sistem penataan nada Slendro dan Pelog yang secara alami memicu resonansi emosional yang dalam. Ketika kami menggabungkan resonansi ini dengan gelombang gergaji (sawtooth) synth modular, lahir suara pertempuran yang terasa kuno sekaligus futuristik.'
    },
    {
      id: 'b-03',
      title: 'Buku Harian Dev #14: Mendesain 5 Avatar Karsa Arya dalam Wayang 2099',
      category: 'Dev Diary',
      readTime: '8 min read',
      date: '15 September 2026',
      author: 'Raden Arya Putra',
      summary: 'Mengapa Semar menjadi Data-Hacker tercanggih dan bagaimana Bima Synth mengeksekusi kombo silat terkuat.',
      content: 'Satu tantangan terbesar dalam sistem pertempuran Wayang 2099 adalah memberi tiap avatar kepribadian mekanik yang tegas tanpa mengorbankan kelancaran animasi kombo (anim-cancel Window).'
    }
  ]);

  testimonials = signal<Testimonial[]>([
    {
      id: 't-01',
      name: 'Marcus Vance',
      role: 'Executive Editor',
      company: 'IGN International',
      avatar: 'IGN',
      quote: 'Nusantara Neon membuktikan bahwa studio SEAsia mampu menghasilkan kualitas visual, gameplay, dan identitas budaya yang sejajar dengan studio papan atas Santa Monica maupun CD Projekt Red.',
      gameReferenced: 'Wayang 2099: Shadow Protocol',
      score: '9.5 / 10'
    },
    {
      id: 't-02',
      name: 'Evelyn Zhang',
      role: 'Lead Curator',
      company: 'Epic Games Showcase',
      avatar: 'EPIC',
      quote: 'Mekanisme puzzle Borobudur: Relics of Eternity adalah salah satu desain teka-teki 3D paling elegan dan imersif yang pernah saya mainkan dalam 10 tahun terakhir.',
      gameReferenced: 'Borobudur: Relics of Eternity',
      score: 'MUST-PLAY'
    },
    {
      id: 't-03',
      name: 'Kenji Takahashi',
      role: 'Senior Game Critic',
      company: 'Famitsu Weekly',
      avatar: 'FAMITSU',
      quote: 'Kombinasi silat, tebasan Mandau neon, dan irama gamelan electro membuat pertempuran Dayak: Guardians of Borneo terasa sangat memuaskan.',
      gameReferenced: 'Dayak: Guardians of Borneo',
      score: '38 / 40 Platinum'
    }
  ]);
}
