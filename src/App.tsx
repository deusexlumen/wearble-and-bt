import { useState, useEffect, useCallback, createContext, useContext, useRef, type ReactNode } from 'react';
import { translations, type Language, type Translations } from './i18n';

// ─── Language Context ───────────────────────────────────────────────────────────
interface LangCtx {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LangCtx>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

function useT() {
  return useContext(LanguageContext);
}

function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'de' ? 'de' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Language Switcher ──────────────────────────────────────────────────────────
function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useT();
  return (
    <div className={`flex gap-1 ${className}`}>
      <button
        onClick={() => setLang('en')}
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('de')}
        className={`lang-btn ${lang === 'de' ? 'active' : ''}`}
      >
        DE
      </button>
    </div>
  );
}

// ─── Scroll Progress Bar ────────────────────────────────────────────────────────
function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="progress-bar" style={{ width: `${width}%` }} />;
}

// ─── Scroll-to-top Button ───────────────────────────────────────────────────────
function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`scroll-top-btn ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}

// ─── Table of Contents ──────────────────────────────────────────────────────────
function TableOfContents({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useT();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        onClose();
      }
    },
    [onClose]
  );

  const tocItems = [
    { id: 'executive-summary', label: t.toc.executiveSummary, level: 0 },
    { id: 'rf-exposure', label: t.toc.rfExposure, level: 0 },
    { id: 'sar-framework', label: t.toc.sarFramework, level: 1 },
    { id: 'apple-watch-sar', label: t.toc.appleWatchSar, level: 1 },
    { id: 'iphone-sar', label: t.toc.iphoneSar, level: 1 },
    { id: 'sar-comparison', label: t.toc.sarComparison, level: 1 },
    { id: 'biomechanics', label: t.toc.biomechanics, level: 0 },
    { id: 'anatomical-params', label: t.toc.anatomicalParams, level: 1 },
    { id: 'torque-calculations', label: t.toc.torqueCalculations, level: 1 },
    { id: 'c1-considerations', label: t.toc.c1Considerations, level: 1 },
    { id: 'posture-implications', label: t.toc.postureImplications, level: 1 },
    { id: 'pfas-exposure', label: t.toc.pfasExposure, level: 0 },
    { id: 'material-composition', label: t.toc.materialComposition, level: 1 },
    { id: 'transfer-mechanisms', label: t.toc.transferMechanisms, level: 1 },
    { id: 'exposure-context', label: t.toc.exposureContext, level: 1 },
    { id: 'risk-mitigation', label: t.toc.riskMitigation, level: 1 },
    { id: 'synthesis', label: t.toc.synthesis, level: 0 },
  ];

  return (
    <nav className={`toc-fixed bg-white shadow-sm ${isOpen ? 'open' : ''}`}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-serif text-xl font-bold text-primary">{t.toc.title}</h2>
        <button className="lg:hidden text-muted hover:text-primary p-1" onClick={onClose}>
          <i className="fas fa-times text-lg" />
        </button>
      </div>

      <div className="mb-6">
        <LanguageSwitcher />
      </div>

      <ul className="space-y-1">
        {tocItems.map((item) => (
          <li key={item.id} className={item.level === 1 ? 'ml-4' : ''}>
            <button
              onClick={() => scrollTo(item.id)}
              className={`block w-full text-left py-1.5 text-sm ${
                item.level === 0
                  ? `toc-link ${activeId === item.id ? 'active' : 'text-muted hover:text-primary'}`
                  : `toc-link-sub ${activeId === item.id ? 'active' : 'text-muted-light hover:text-muted'} text-xs`
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Fade-in Section Wrapper ────────────────────────────────────────────────────
function FadeIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────────────────
function HeroSection() {
  const { t } = useT();
  return (
    <section className="px-4 sm:px-8 py-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <FadeIn>
          <div className="mb-8">
            <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {t.hero.badge}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-primary">
              <span className="italic text-muted">{t.hero.titleItalic}</span>
              <br />
              {t.hero.titleMain}
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
            {t.hero.subtitle}
          </p>
        </FadeIn>

        <FadeIn className="mt-8">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop"
              alt="Technology risk visualization"
              className="w-full h-48 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 sm:p-8 text-white">
                <p className="text-base sm:text-lg font-medium">{t.hero.imageCaption}</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-8">
          <div id="executive-summary" className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold mb-6 text-primary">{t.hero.summaryTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-emerald-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <i className="fas fa-radiation text-emerald-600 text-xl mr-3" />
                  <h3 className="font-semibold text-primary">{t.hero.rfTitle}</h3>
                </div>
                <p className="text-sm text-muted mb-3">{t.hero.rfDesc}</p>
                <div className="text-2xl font-bold text-emerald-600">0.16 W/kg</div>
                <div className="text-xs text-muted">{t.hero.rfLimit}</div>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <i className="fas fa-bone text-red-600 text-xl mr-3" />
                  <h3 className="font-semibold text-primary">{t.hero.bioTitle}</h3>
                </div>
                <p className="text-sm text-muted mb-3">{t.hero.bioDesc}</p>
                <div className="text-2xl font-bold text-red-600">9.55 N·m</div>
                <div className="text-xs text-muted">{t.hero.bioUnit}</div>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg sm:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-3">
                  <i className="fas fa-flask text-amber-600 text-xl mr-3" />
                  <h3 className="font-semibold text-primary">{t.hero.chemTitle}</h3>
                </div>
                <p className="text-sm text-muted mb-3">{t.hero.chemDesc}</p>
                <div className="text-2xl font-bold text-amber-600">16,000+ ppb</div>
                <div className="text-xs text-muted">{t.hero.chemUnit}</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── RF Exposure Section ────────────────────────────────────────────────────────
function RFExposureSection() {
  const { t } = useT();
  return (
    <section id="rf-exposure" className="px-4 sm:px-8 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <header className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-primary">{t.rf.sectionTitle}</h2>
            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-4xl">{t.rf.sectionDesc}</p>
          </header>
        </FadeIn>

        {/* 1.1 Regulatory Framework */}
        <div id="sar-framework" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.rf.frameworkTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.rf.sarLimitsTitle}</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium">{t.rf.torsoHead}</span>
                      <span className="font-bold text-amber-600">2.0 W/kg</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">{t.rf.extremities}</span>
                      <span className="font-bold text-emerald-600">4.0 W/kg</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted mt-4">{t.rf.limitsNote}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.rf.testConfigTitle}</h4>
                <div className="space-y-3">
                  {[
                    { label: t.rf.testStandard, desc: t.rf.testStandardDesc },
                    { label: t.rf.testSimultaneous, desc: t.rf.testSimultaneousDesc },
                    { label: t.rf.testBodyWorn, desc: t.rf.testBodyWornDesc },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="font-medium text-primary">{item.label}</div>
                      <div className="text-sm text-muted">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 1.2 Apple Watch SAR */}
        <div id="apple-watch-sar" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.rf.watchTitle}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 rounded-full p-3 mr-4">
                    <i className="fas fa-clock text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-800">0.16 W/kg</div>
                    <div className="text-sm text-emerald-600">{t.rf.limbSar}</div>
                  </div>
                </div>
                <div className="text-sm text-emerald-700">
                  <strong>4.0%</strong> {t.rf.ofExtremityLimit}<br />
                  <strong>25×</strong> {t.rf.safetyMargin}
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 rounded-full p-3 mr-4">
                    <i className="fas fa-phone text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-800">0.17 W/kg</div>
                    <div className="text-sm text-emerald-600">{t.rf.headSar}</div>
                  </div>
                </div>
                <div className="text-sm text-emerald-700">
                  <strong>8.5%</strong> {t.rf.ofHeadLimit}<br />
                  <strong>11.8×</strong> {t.rf.safetyMargin}
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 rounded-full p-3 mr-4">
                    <i className="fas fa-shield-alt text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-800">{t.rf.exemplary}</div>
                    <div className="text-sm text-emerald-600">{t.rf.safetyMarginLabel}</div>
                  </div>
                </div>
                <div className="text-sm text-emerald-700">
                  {t.rf.exceptionalConservatism}<br />
                  {t.rf.engineeringExcellence}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-4 text-primary">{t.rf.transmissionTitle}</h4>
              <div className="space-y-3">
                {[
                  { label: t.rf.ble, note: t.rf.bleNote, icon: 'check-circle', color: 'green' },
                  { label: t.rf.wifi, note: t.rf.wifiNote, icon: 'check-circle', color: 'green' },
                  { label: t.rf.cellular, note: t.rf.cellularNote, icon: 'exclamation-circle', color: 'yellow' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-white rounded-lg p-3">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-sm text-muted">
                      <i className={`fas fa-${item.icon} text-${item.color}-500 mr-1`} />
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 1.3 iPhone SAR */}
        <div id="iphone-sar" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.rf.iphoneTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-orange-800">{t.rf.iphone16Standard}</h4>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-orange-800">1.167 W/kg</div>
                  <div className="text-sm text-orange-600">{t.rf.bodyWornAt5mm}</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t.rf.ofTorsoLimit}</span>
                    <span className="font-bold">58.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.rf.marginCompression}</span>
                    <span className="font-bold">1.71×</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-red-800">{t.rf.iphone16Simultaneous}</h4>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-red-800">1.537 W/kg</div>
                  <div className="text-sm text-red-600">{t.rf.cellularWifi}</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t.rf.ofTorsoLimit}</span>
                    <span className="font-bold">76.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.rf.marginCompression}</span>
                    <span className="font-bold text-red-700">1.30×</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-4 text-primary">{t.rf.iphone17Title}</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted mb-2">{t.rf.cellularSar}</div>
                  <div className="flex items-center">
                    <span className="font-bold text-lg">1.16 W/kg</span>
                    <span className="text-sm text-emerald-600 ml-2">↓0.6%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted mb-2">{t.rf.simultaneousSar}</div>
                  <div className="flex items-center">
                    <span className="font-bold text-lg">1.54 W/kg</span>
                    <span className="text-sm text-orange-600 ml-2">↑0.2%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted mt-4">{t.rf.iphone17Note}</p>
            </div>
          </FadeIn>
        </div>

        {/* 1.4 Comparative Assessment */}
        <div id="sar-comparison" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.rf.comparisonTitle}</h3>

            <div className="bg-gradient-to-r from-emerald-50 via-amber-50 to-red-50 rounded-lg p-6 sm:p-8 mb-8">
              <h4 className="font-semibold text-xl mb-6 text-primary text-center">{t.rf.magnitudeDiffTitle}</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-2">9.6×</div>
                  <div className="text-sm text-muted">{t.rf.absoluteDiff}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600 mb-2">19.3×</div>
                  <div className="text-sm text-muted">{t.rf.normalizedMargin}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">25×</div>
                  <div className="text-sm text-muted">{t.rf.watchMargin}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 mb-2">300-500×</div>
                  <div className="text-sm text-muted">{t.rf.timeAveraged}</div>
                </div>
              </div>
            </div>

            {/* Risk Hierarchy Diagram */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-8">
              <h4 className="font-semibold text-lg mb-6 text-primary text-center">{t.rf.riskHierarchyTitle}</h4>

              {/* Root node */}
              <div className="flex justify-center mb-2">
                <div className="flow-node bg-gray-100 border-gray-400 text-gray-700 font-bold text-sm">
                  {t.rf.deviceRiskAssessment}
                </div>
              </div>
              <div className="flow-connector" />

              {/* Category row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                {[
                  { label: t.rf.rfExposureRisk, items: [
                    { text: `Apple Watch\n0.16 W/kg\n25× ${t.rf.margin}`, cls: 'bg-emerald-100 border-emerald-400 text-emerald-800' },
                    { text: `iPhone Cellular\n1.16 W/kg\n1.7× ${t.rf.margin}`, cls: 'bg-amber-100 border-amber-400 text-amber-800' },
                    { text: `iPhone Simultaneous\n1.54 W/kg\n1.3× ${t.rf.margin}`, cls: 'bg-red-100 border-red-400 text-red-800' },
                  ]},
                  { label: t.rf.biomechanicalRisk, items: [
                    { text: `${t.rf.neutralFlexion}\n0 N·m\n${t.rf.noTorque}`, cls: 'bg-emerald-100 border-emerald-400 text-emerald-800' },
                    { text: `${t.rf.mildFlexion}\n2.85 N·m\n12 kg ${t.rf.load}`, cls: 'bg-amber-100 border-amber-400 text-amber-800' },
                    { text: `${t.rf.severeFlexion}\n9.55 N·m\n27 kg ${t.rf.load}`, cls: 'bg-red-100 border-red-400 text-red-800' },
                  ]},
                  { label: t.rf.chemicalTransferRisk, items: [
                    { text: `${t.rf.siliconeBands}\n<1% ${t.rf.fluorine}\n${t.rf.lowRisk}`, cls: 'bg-emerald-100 border-emerald-400 text-emerald-800' },
                    { text: `${t.rf.midRangeBands}\n${t.rf.variable}\n${t.rf.moderateRisk}`, cls: 'bg-amber-100 border-amber-400 text-amber-800' },
                    { text: `${t.rf.premiumBands}\n>16,000 ppb\n${t.rf.highRisk}`, cls: 'bg-red-100 border-red-400 text-red-800' },
                  ]},
                ].map((cat) => (
                  <div key={cat.label}>
                    <div className="flow-connector" />
                    <div className="flow-node bg-gray-100 border-gray-400 text-gray-700 font-semibold text-xs mb-3">
                      {cat.label}
                    </div>
                    <div className="space-y-2">
                      {cat.items.map((item, i) => (
                        <div key={i} className={`flow-node ${item.cls} text-xs whitespace-pre-line`}>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory Margin Analysis */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-4 text-primary">{t.rf.regulatoryMarginTitle}</h4>
              <div className="space-y-4">
                {[
                  { color: 'bg-emerald-500', label: 'Apple Watch Series 10', desc: t.rf.exceptionalMarginDesc },
                  { color: 'bg-amber-500', label: 'iPhone Cellular', desc: t.rf.prudentCompliance },
                  { color: 'bg-red-500', label: 'iPhone Simultaneous', desc: t.rf.marginCompressionDesc },
                ].map((item) => (
                  <div key={item.label} className="flex items-center">
                    <div className={`w-4 h-4 ${item.color} rounded-full mr-3 shrink-0`} />
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-muted">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Biomechanics Section ───────────────────────────────────────────────────────
function BiomechanicsSection() {
  const { t } = useT();
  return (
    <section id="biomechanics" className="px-4 sm:px-8 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <header className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-primary">{t.bio.sectionTitle}</h2>
            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-4xl">{t.bio.sectionDesc}</p>
          </header>
        </FadeIn>

        {/* 2.1 Anatomical Parameters */}
        <div id="anatomical-params" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.bio.paramsTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.bio.headMassTitle}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span>{t.bio.adultMale}</span>
                    <span className="font-medium">5.0 kg</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span>{t.bio.adultFemale}</span>
                    <span className="font-medium">4.6 kg</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>{t.bio.standardModel}</span>
                    <span className="font-bold text-amber-700">5.0 kg</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <div className="text-sm text-muted">{t.bio.gravitationalForce}</div>
                  <div className="font-bold text-amber-700">49.0 N (mg)</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.bio.leverageTitle}</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-muted">{t.bio.pivotLocation}</div>
                    <div className="font-medium">{t.bio.pivotValue}</div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <div className="text-sm text-muted">{t.bio.leverArm}</div>
                    <div className="font-bold text-amber-700">0.225 m (22.5 cm)</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-muted">{t.bio.comPosition}</div>
                    <div className="font-medium">{t.bio.comValue}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=300&fit=crop"
                alt="Cervical spine anatomy"
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-muted">{t.bio.spineCaption}</p>
            </div>
          </FadeIn>
        </div>

        {/* 2.2 Torque Calculations */}
        <div id="torque-calculations" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.bio.torqueTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.bio.methodologyTitle}</h4>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="font-mono text-lg text-center mb-2">τ = F × d × sin(θ)</div>
                  <div className="text-sm text-muted">
                    <div><strong>F</strong> = 49.0 N ({t.bio.headWeight})</div>
                    <div><strong>d</strong> = 0.225 m ({t.bio.leverArmLabel})</div>
                    <div><strong>θ</strong> = {t.bio.flexionAngle}</div>
                  </div>
                </div>
                <p className="text-sm text-muted">{t.bio.methodNote}</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-4">
                  {[
                    { label: t.bio.neutral, desc: t.bio.neutralDesc, color: 'green' },
                    { label: t.bio.mild, desc: t.bio.mildDesc, color: 'yellow' },
                    { label: t.bio.moderate, desc: t.bio.moderateDesc, color: 'orange' },
                    { label: t.bio.severe, desc: t.bio.severeDesc, color: 'red' },
                  ].map((item) => (
                    <div key={item.label} className={`border-l-4 border-${item.color}-500 pl-4`}>
                      <div className={`font-semibold text-${item.color}-800`}>{item.label}</div>
                      <div className={`text-sm text-${item.color}-600`}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 via-amber-50 to-red-50 rounded-lg p-6 sm:p-8 mb-8">
              <h4 className="font-semibold text-xl mb-6 text-primary text-center">{t.bio.progressiveTitle}</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {[
                  { angle: '0°', label: t.bio.neutral.split(' ')[0] === '0°' ? 'Neutral' : t.bio.neutral.replace('0° ', ''), torque: '0 N·m', color: 'emerald' },
                  { angle: '15°', label: t.bio.mild.split(' ').slice(1).join(' ').replace('Flexion', '').replace('Beugung', '').trim() || 'Mild', torque: '2.85 N·m', color: 'yellow' },
                  { angle: '30°', label: t.bio.moderate.split(' ').slice(1).join(' ').replace('Flexion', '').replace('Beugung', '').trim() || 'Moderate', torque: '5.51 N·m', color: 'orange' },
                  { angle: '60°', label: t.bio.severe.split(' ').slice(1).join(' ').replace('Flexion', '').replace('Beugung', '').trim() || 'Severe', torque: '9.55 N·m', color: 'red' },
                ].map((item) => (
                  <div key={item.angle} className="bg-white rounded-lg p-4">
                    <div className={`text-2xl font-bold text-${item.color}-600 mb-2`}>{item.angle}</div>
                    <div className="text-sm text-muted">{item.label}</div>
                    <div className={`text-lg font-bold text-${item.color}-600 mt-2`}>{item.torque}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center text-sm text-muted">{t.bio.progressiveNote}</div>
            </div>
          </FadeIn>
        </div>

        {/* 2.3 C1 Considerations */}
        <div id="c1-considerations" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.bio.c1Title}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.bio.normalCapacityTitle}</h4>
                <div className="space-y-3">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="font-medium text-emerald-800">{t.bio.feaValidation}</div>
                    <div className="text-sm text-emerald-600">{t.bio.feaValue}</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="font-medium text-amber-800">{t.bio.cadavericTesting}</div>
                    <div className="text-sm text-amber-600">{t.bio.cadavericValue}</div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="font-medium text-red-800">{t.bio.ligamentousInjury}</div>
                    <div className="text-sm text-red-600">{t.bio.ligamentousValue}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.bio.safetyErosionTitle}</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span>{t.bio.flexion15}</span>
                    <span className="text-red-600 font-medium">{t.bio.exceedsFea}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span>{t.bio.flexion30}</span>
                    <span className="text-orange-600 font-medium">{t.bio.belowCadaveric}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span>{t.bio.flexion60}</span>
                    <span className="text-red-600 font-medium">{t.bio.exceedsCapacity}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <div className="text-sm text-amber-700">{t.bio.criticalThreshold}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-4 text-primary">{t.bio.pathologicalTitle}</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">&gt;20°</div>
                  <div className="text-sm text-red-600 font-medium">{t.bio.romIncrease}</div>
                  <div className="text-xs text-muted mt-1">{t.bio.segmentalInstability}</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">&gt;5.0 N·m</div>
                  <div className="text-sm text-orange-600 font-medium">{t.bio.c1RingFracture}</div>
                  <div className="text-xs text-muted mt-1">{t.bio.fatigueMicrodamage}</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 mb-2">&gt;3.0 N·m</div>
                  <div className="text-sm text-amber-600 font-medium">{t.bio.discDegeneration}</div>
                  <div className="text-xs text-muted mt-1">{t.bio.acceleratedAging}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 2.4 Posture Implications */}
        <div id="posture-implications" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.bio.postureTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.bio.acuteChronicTitle}</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <div className="font-medium text-emerald-800">{t.bio.acuteLabel}</div>
                    <div className="text-sm text-emerald-600">{t.bio.acuteDesc}</div>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <div className="font-medium text-amber-800">{t.bio.subacuteLabel}</div>
                    <div className="text-sm text-amber-600">{t.bio.subacuteDesc}</div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-medium text-red-800">{t.bio.chronicLabel}</div>
                    <div className="text-sm text-red-600">{t.bio.chronicDesc}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.bio.c0c1Title}</h4>
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="font-medium text-red-800 mb-2">{t.bio.totalFlexion}</div>
                    <div className="text-sm text-red-600">{t.bio.concentrated}</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="font-medium text-amber-800 mb-2">{t.bio.c2c7}</div>
                    <div className="text-sm text-amber-600">{t.bio.reducedLoad}</div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="font-medium text-orange-800 mb-2">{t.bio.compensatoryKyphosis}</div>
                    <div className="text-sm text-orange-600">{t.bio.transmittedLoad}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 sm:p-8">
              <h4 className="font-semibold text-xl mb-6 text-primary text-center">{t.bio.kinematicTitle}</h4>
              <div className="text-center mb-6">
                <div className="text-lg font-medium mb-2">{t.bio.kinematicDesc}</div>
                <div className="text-sm text-muted">{t.bio.kinematicNote}</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">60%</div>
                  <div className="text-sm font-medium">{t.bio.c0c1Motion}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">40%</div>
                  <div className="text-sm font-medium">{t.bio.thoracicCompensation}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">&lt;5%</div>
                  <div className="text-sm font-medium">{t.bio.c2c7Contribution}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── PFAS Section ───────────────────────────────────────────────────────────────
function PFASSection() {
  const { t } = useT();
  return (
    <section id="pfas-exposure" className="px-4 sm:px-8 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <header className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-primary">{t.pfas.sectionTitle}</h2>
            <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-4xl">{t.pfas.sectionDesc}</p>
          </header>
        </FadeIn>

        {/* 3.1 Material Composition */}
        <div id="material-composition" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.pfas.materialTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-blue-800">{t.pfas.fluoroelastomerTitle}</h4>
                <div className="space-y-3">
                  {[
                    { label: t.pfas.chemicalStability, value: t.pfas.chemicalStabilityValue },
                    { label: t.pfas.lowSurfaceEnergy, value: t.pfas.lowSurfaceEnergyValue },
                    { label: t.pfas.mechanicalDurability, value: t.pfas.mechanicalDurabilityValue },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-3">
                      <div className="font-medium text-blue-800">{item.label}</div>
                      <div className="text-sm text-blue-600">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-red-800">{t.pfas.pfhxaTitle}</h4>
                <div className="space-y-3">
                  {[
                    { label: t.pfas.medianConcentration, value: t.pfas.medianValue },
                    { label: t.pfas.maximumDetected, value: t.pfas.maximumValue },
                    { label: t.pfas.detectionRate, value: t.pfas.detectionValue },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-3">
                      <div className="font-medium text-red-800">{item.label}</div>
                      <div className="text-sm text-red-600">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-4 text-primary">{t.pfas.priceParadoxTitle}</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <div className="font-bold text-red-800 mb-2">{t.pfas.premium}</div>
                  <div className="text-sm text-red-600 mb-2">{t.pfas.premiumFluorine}</div>
                  <div className="text-xs text-muted">{t.pfas.premiumDetection}</div>
                  <div className="text-sm font-bold text-red-700 mt-2">{t.pfas.highestRisk}</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                  <div className="font-bold text-amber-800 mb-2">{t.pfas.midRange}</div>
                  <div className="text-sm text-amber-600 mb-2">{t.pfas.midRangeFluorine}</div>
                  <div className="text-xs text-muted">{t.pfas.partialDetection}</div>
                  <div className="text-sm font-bold text-amber-700 mt-2">{t.pfas.moderateRiskLabel}</div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                  <div className="font-bold text-emerald-800 mb-2">{t.pfas.budget}</div>
                  <div className="text-sm text-emerald-600 mb-2">{t.pfas.budgetFluorine}</div>
                  <div className="text-xs text-muted">{t.pfas.zeroDetection}</div>
                  <div className="text-sm font-bold text-emerald-700 mt-2">{t.pfas.lowestRisk}</div>
                </div>
              </div>
              <p className="text-sm text-muted mt-4 text-center">{t.pfas.paradoxNote}</p>
            </div>
          </FadeIn>
        </div>

        {/* 3.2 Transfer Mechanisms */}
        <div id="transfer-mechanisms" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.pfas.transferTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.pfas.sweatTitle}</h4>
                <div className="space-y-4">
                  {[
                    { icon: 'fa-thermometer-half', iconColor: 'text-orange-600', bgColor: 'bg-orange-100', label: t.pfas.elevatedTemp, labelColor: 'text-orange-800', value: t.pfas.elevatedTempValue, valueColor: 'text-orange-600' },
                    { icon: 'fa-tint', iconColor: 'text-blue-600', bgColor: 'bg-blue-100', label: t.pfas.poreDilation, labelColor: 'text-blue-800', value: t.pfas.poreDilationValue, valueColor: 'text-blue-600' },
                    { icon: 'fa-droplet', iconColor: 'text-emerald-600', bgColor: 'bg-emerald-100', label: t.pfas.hydration, labelColor: 'text-emerald-800', value: t.pfas.hydrationValue, valueColor: 'text-emerald-600' },
                    { icon: 'fa-hand-paper', iconColor: 'text-purple-600', bgColor: 'bg-purple-100', label: t.pfas.mechanicalFriction, labelColor: 'text-purple-800', value: t.pfas.mechanicalFrictionValue, valueColor: 'text-purple-600' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start">
                      <div className={`${item.bgColor} rounded-full p-2 mr-3 mt-1`}>
                        <i className={`fas ${item.icon} ${item.iconColor}`} />
                      </div>
                      <div>
                        <div className={`font-medium ${item.labelColor}`}>{item.label}</div>
                        <div className={`text-sm ${item.valueColor}`}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.pfas.absorptionTitle}</h4>
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="font-medium text-red-800 mb-2">{t.pfas.inVitroTitle}</div>
                    <div className="text-2xl font-bold text-red-600">≤60%</div>
                    <div className="text-sm text-red-600">{t.pfas.inVitroDesc}</div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="font-medium text-orange-800 mb-2">{t.pfas.skinModelTitle}</div>
                    <div className="text-2xl font-bold text-orange-600">{t.pfas.skinModelValue}</div>
                    <div className="text-sm text-orange-600">{t.pfas.skinModelDesc}</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="font-medium text-amber-800 mb-2">{t.pfas.biomonitoringTitle}</div>
                    <div className="text-2xl font-bold text-amber-600">{t.pfas.biomonitoringValue}</div>
                    <div className="text-sm text-amber-600">{t.pfas.biomonitoringDesc}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 sm:p-8">
              <h4 className="font-semibold text-xl mb-6 text-primary text-center">{t.pfas.transdermalTitle}</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 text-primary">{t.pfas.physiologicalTitle}</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-sm">{t.pfas.tempElevation}</span><span className="text-sm font-medium">2–5× per 10°C</span></div>
                    <div className="flex justify-between"><span className="text-sm">{t.pfas.vasodilation}</span><span className="text-sm font-medium">{t.pfas.bloodFlow}</span></div>
                    <div className="flex justify-between"><span className="text-sm">{t.pfas.poreDilationLabel}</span><span className="text-sm font-medium">{t.pfas.surfaceArea}</span></div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-primary">{t.pfas.mechanicalTitle}</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-sm">{t.pfas.friction}</span><span className="text-sm font-medium">{t.pfas.surfaceDisruption}</span></div>
                    <div className="flex justify-between"><span className="text-sm">{t.pfas.occlusion}</span><span className="text-sm font-medium">{t.pfas.hydrationMaintenance}</span></div>
                    <div className="flex justify-between"><span className="text-sm">{t.pfas.pressure}</span><span className="text-sm font-medium">{t.pfas.contactIntimacy}</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-muted">{t.pfas.transdermalNote}</div>
            </div>
          </FadeIn>
        </div>

        {/* 3.3 Exposure Context */}
        <div id="exposure-context" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.pfas.exposureTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.pfas.usagePatternsTitle}</h4>
                <div className="space-y-4">
                  {[
                    { label: t.pfas.wearDuration, value: t.pfas.wearDurationValue },
                    { label: t.pfas.activityFrequency, value: t.pfas.activityFrequencyValue },
                    { label: t.pfas.sessionLength, value: t.pfas.sessionLengthValue },
                    { label: t.pfas.annualExposure, value: t.pfas.annualExposureValue },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-amber-700 font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-4 text-primary">{t.pfas.regulatoryStatusTitle}</h4>
                <div className="space-y-3">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="font-medium text-emerald-800 mb-2">{t.pfas.euTitle}</div>
                    <div className="text-sm text-emerald-600">{t.pfas.euStatus}</div>
                    <div className="text-xs text-muted">{t.pfas.euNote}</div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="font-medium text-red-800 mb-2">{t.pfas.usTitle}</div>
                    <div className="text-sm text-red-600">{t.pfas.usStatus}</div>
                    <div className="text-xs text-muted">{t.pfas.usNote}</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="font-medium text-amber-800 mb-2">{t.pfas.epaTitle}</div>
                    <div className="text-sm text-amber-600">{t.pfas.epaStatus}</div>
                    <div className="text-xs text-muted">{t.pfas.epaNote}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <img
                src="https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&h=300&fit=crop"
                alt="Smartwatch during exercise"
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-muted">{t.pfas.exerciseCaption}</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 sm:p-8">
              <h4 className="font-semibold text-xl mb-6 text-primary text-center">{t.pfas.behavioralTitle}</h4>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: 'fa-running', color: 'text-red-500', label: t.pfas.sportPositioning, desc: t.pfas.sportPositioningDesc },
                  { icon: 'fa-tint', color: 'text-orange-500', label: t.pfas.sweatEnhancement, desc: t.pfas.sweatEnhancementDesc },
                  { icon: 'fa-clock', color: 'text-amber-500', label: t.pfas.sustainedWear, desc: t.pfas.sustainedWearDesc },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-lg p-4 text-center">
                    <i className={`fas ${item.icon} ${item.color} text-3xl mb-3`} />
                    <div className="font-medium mb-2">{item.label}</div>
                    <div className="text-sm text-muted">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 3.4 Risk Mitigation */}
        <div id="risk-mitigation" className="mb-16">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.pfas.mitigationTitle}</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-emerald-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-emerald-800">{t.pfas.consumerGuidanceTitle}</h4>
                <div className="space-y-4">
                  {[
                    { icon: 'fa-shield-alt', label: t.pfas.materialSubstitution, desc: t.pfas.materialSubstitutionDesc, effect: t.pfas.materialSubstitutionEffect },
                    { icon: 'fa-search', label: t.pfas.productScreening, desc: t.pfas.productScreeningDesc, effect: t.pfas.productScreeningEffect },
                    { icon: 'fa-clock', label: t.pfas.durationLimitation, desc: t.pfas.durationLimitationDesc, effect: t.pfas.durationLimitationEffect },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-4 border border-emerald-200">
                      <div className="flex items-center mb-2">
                        <i className={`fas ${item.icon} text-emerald-600 mr-2`} />
                        <div className="font-medium text-emerald-800">{item.label}</div>
                      </div>
                      <div className="text-sm text-emerald-600 mb-2">{item.desc}</div>
                      <div className="text-xs text-emerald-700 font-medium">{item.effect}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-blue-800">{t.pfas.manufacturerTitle}</h4>
                <div className="space-y-4">
                  {[
                    { icon: 'fa-flask', label: t.pfas.pfasFreeTitle, desc: t.pfas.pfasFreeDesc, note: t.pfas.pfasFreeNote },
                    { icon: 'fa-file-alt', label: t.pfas.explicitDisclosure, desc: t.pfas.explicitDisclosureDesc, note: t.pfas.explicitDisclosureNote },
                    { icon: 'fa-vial', label: t.pfas.standardizedTesting, desc: t.pfas.standardizedTestingDesc, note: t.pfas.standardizedTestingNote },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center mb-2">
                        <i className={`fas ${item.icon} text-blue-600 mr-2`} />
                        <div className="font-medium text-blue-800">{item.label}</div>
                      </div>
                      <div className="text-sm text-blue-600">{item.desc}</div>
                      <div className="text-xs text-blue-700">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-lg mb-4 text-red-800">{t.pfas.legalTitle}</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="font-medium text-red-800 mb-2">{t.pfas.californiaTitle}</div>
                  <div className="text-sm text-red-600 mb-2">{t.pfas.californiaDesc}</div>
                  <div className="text-xs text-muted">{t.pfas.californiaNote}</div>
                </div>
                <div>
                  <div className="font-medium text-red-800 mb-2">{t.pfas.euRegulatoryTitle}</div>
                  <div className="text-sm text-red-600 mb-2">{t.pfas.euRegulatoryDesc}</div>
                  <div className="text-xs text-muted">{t.pfas.euRegulatoryNote}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6 sm:p-8">
              <h4 className="font-semibold text-xl mb-6 text-primary text-center">{t.pfas.materialHierarchyTitle}</h4>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-emerald-100 border-2 border-emerald-300 rounded-lg p-4 text-center">
                  <div className="text-emerald-600 text-3xl mb-3"><i className="fas fa-check-circle" /></div>
                  <div className="font-bold text-emerald-800 mb-2">{t.pfas.preferred}</div>
                  <div className="text-sm text-emerald-600 mb-2">{t.pfas.siliconeElastomers}</div>
                  <div className="text-xs text-emerald-700">{t.pfas.zeroPfas}</div>
                  <div className="text-xs text-emerald-700">{t.pfas.comparablePerformance}</div>
                  <div className="text-xs text-emerald-700">{t.pfas.lowerCost}</div>
                </div>
                <div className="bg-amber-100 border-2 border-amber-300 rounded-lg p-4 text-center">
                  <div className="text-amber-600 text-3xl mb-3"><i className="fas fa-exclamation-triangle" /></div>
                  <div className="font-bold text-amber-800 mb-2">{t.pfas.caution}</div>
                  <div className="text-sm text-amber-600 mb-2">{t.pfas.uncertainComposition}</div>
                  <div className="text-xs text-amber-700">{t.pfas.verifyMaterials}</div>
                  <div className="text-xs text-amber-700">{t.pfas.limitedSweat}</div>
                  <div className="text-xs text-amber-700">{t.pfas.regularCleaning}</div>
                </div>
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 text-center">
                  <div className="text-red-600 text-3xl mb-3"><i className="fas fa-ban" /></div>
                  <div className="font-bold text-red-800 mb-2">{t.pfas.avoid}</div>
                  <div className="text-sm text-red-600 mb-2">{t.pfas.fluoroelastomers}</div>
                  <div className="text-xs text-red-700">{t.pfas.pfhxaContamination}</div>
                  <div className="text-xs text-red-700">{t.pfas.sweatEnhancementRisk}</div>
                  <div className="text-xs text-red-700">{t.pfas.highCostNotSafety}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Synthesis Section ──────────────────────────────────────────────────────────
function SynthesisSection() {
  const { t } = useT();
  return (
    <section id="synthesis" className="px-4 sm:px-8 py-16 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <header className="mb-12 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">{t.synth.sectionTitle}</h2>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">{t.synth.sectionDesc}</p>
          </header>
        </FadeIn>

        <FadeIn>
          <div className="bg-white/10 rounded-lg p-6 sm:p-8 mb-12">
            <h3 className="font-serif text-2xl font-bold mb-8 text-center">{t.synth.matrixTitle}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-emerald-500/20 rounded-lg p-6">
                <div className="text-center mb-4">
                  <i className="fas fa-clock text-emerald-300 text-3xl mb-3" />
                  <h4 className="font-bold text-xl">{t.synth.watchTitle}</h4>
                  <div className="text-sm text-emerald-200">{t.synth.watchSubtitle}</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span>{t.synth.sarValue}</span><span className="font-bold">0.16 W/kg</span></div>
                  <div className="flex justify-between"><span>{t.synth.safetyMarginLabel}</span><span className="font-bold">25×</span></div>
                  <div className="flex justify-between"><span>{t.synth.regulatoryStatus}</span><span className="font-bold text-emerald-300">{t.synth.exceptional}</span></div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-lg p-6">
                <div className="text-center mb-4">
                  <i className="fas fa-mobile-alt text-orange-300 text-3xl mb-3" />
                  <h4 className="font-bold text-xl">{t.synth.iphoneTitle}</h4>
                  <div className="text-sm text-orange-200">{t.synth.iphoneSubtitle}</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span>{t.synth.peakTorque}</span><span className="font-bold">9.55 N·m</span></div>
                  <div className="flex justify-between"><span>{t.synth.equivalentLoad}</span><span className="font-bold">27 kg</span></div>
                  <div className="flex justify-between"><span>{t.synth.structuralStatus}</span><span className="font-bold text-orange-300">{t.synth.exceedsTolerance}</span></div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-lg p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-center mb-4">
                  <i className="fas fa-band-aid text-red-300 text-3xl mb-3" />
                  <h4 className="font-bold text-xl">{t.synth.bandsTitle}</h4>
                  <div className="text-sm text-red-200">{t.synth.bandsSubtitle}</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span>{t.synth.maxPfhxa}</span><span className="font-bold">&gt;16,000 ppb</span></div>
                  <div className="flex justify-between"><span>{t.synth.absorptionRisk}</span><span className="font-bold">{t.synth.sweatEnhanced}</span></div>
                  <div className="flex justify-between"><span>{t.synth.exposureStatus}</span><span className="font-bold text-red-300">{t.synth.critical}</span></div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-serif text-xl font-bold mb-4">{t.synth.paradoxTitle}</h4>
              <p className="text-white/80 text-sm mb-4">{t.synth.paradoxDesc}</p>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-xs text-white/60 mb-1">{t.synth.riskPurchasing}</div>
                <div className="text-sm font-medium">{t.synth.riskPurchasingDesc}</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-serif text-xl font-bold mb-4">{t.synth.concentratedTitle}</h4>
              <p className="text-white/80 text-sm mb-4">{t.synth.concentratedDesc}</p>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-xs text-white/60 mb-1">{t.synth.anatomicalConsideration}</div>
                <div className="text-sm font-medium">{t.synth.anatomicalConsiderationDesc}</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-white/5 rounded-lg p-6 sm:p-8 mb-12">
            <h3 className="font-serif text-2xl font-bold mb-8 text-center">{t.synth.strategyTitle}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'fa-comments', color: 'emerald', title: t.synth.commTitle, items: t.synth.commItems },
                { icon: 'fa-user', color: 'blue', title: t.synth.postureTitle, items: t.synth.postureItems },
                { icon: 'fa-shield-alt', color: 'purple', title: t.synth.materialTitle, items: t.synth.materialItems },
              ].map((card) => (
                <div key={card.title} className="text-center">
                  <div className={`bg-${card.color}-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <i className={`fas ${card.icon} text-${card.color}-300 text-2xl`} />
                  </div>
                  <h4 className="font-bold mb-3">{card.title}</h4>
                  <ul className="text-sm text-white/80 space-y-1 text-left">
                    {card.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-white/10 rounded-lg p-6 sm:p-8 text-center">
            <h3 className="font-serif text-2xl font-bold mb-6">{t.synth.finalTitle}</h3>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-6">{t.synth.finalDesc}</p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-300 mb-2">25×</div>
                <div className="text-sm text-white/70">{t.synth.watchMarginDesc}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-300 mb-2">60°</div>
                <div className="text-sm text-white/70">{t.synth.flexionDesc}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-300 mb-2">16,000+</div>
                <div className="text-sm text-white/70">{t.synth.pfhxaDesc}</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── References Section ─────────────────────────────────────────────────────────
function ReferencesSection() {
  const { t } = useT();
  const refs = [
    { id: 'ref-3', num: 3, text: 'Apple Inc. RF Exposure Information.', url: 'https://images.apple.com/legal/rfexposure/watch3,1/en/', urlText: 'Legal Documentation' },
    { id: 'ref-157', num: 157, text: 'Antutu. California Class Action Litigation Against Apple.', url: 'https://www.antutu.com/doc/133647.htm', urlText: 'Legal Analysis' },
    { id: 'ref-216', num: 216, text: 'Brain Medical. Biomechanical Modeling Standards.', url: 'https://www.brainmed.com/info/detail?id=13304', urlText: 'Technical Documentation' },
    { id: 'ref-237', num: 237, text: 'Applied Sciences Journal. Text Neck Syndrome Analysis.', url: 'https://www.mdpi.com/2076-3417/15/12/6770', urlText: 'Research Article' },
    { id: 'ref-259', num: 259, text: 'PMC. Cervical Spondylosis in Younger Demographics.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12775622/', urlText: 'Medical Research' },
    { id: 'ref-275', num: 275, text: 'PMC. Dermal Absorption Mechanisms.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12021448/', urlText: 'Scientific Research' },
    { id: 'ref-277', num: 277, text: 'PMC. Finite Element Validation Study.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10408867/', urlText: 'Biomechanical Research' },
    { id: 'ref-278', num: 278, text: 'Xuzhou Medical University. Cadaveric Atlantoaxial Testing.', url: 'https://xb.xzhmu.edu.cn/cn/article/pdf/preview/20062603005yuanfeng.pdf', urlText: 'Academic Research' },
    { id: 'ref-290', num: 290, text: 'ScienceDirect. Segmental Instability Thresholds.', url: 'https://www.sciencedirect.com/science/article/pii/S1877056813002843', urlText: 'Journal Article' },
    { id: 'ref-291', num: 291, text: 'InTechOpen. Ligamentous Injury Mechanisms.', url: 'https://www.intechopen.com/chapters/38127', urlText: 'Academic Chapter' },
    { id: 'ref-298', num: 298, text: 'MDPI Symmetry. C0–C1 Joint Kinematics.', url: 'https://www.mdpi.com/2073-8994/15/3/667', urlText: 'Research Article' },
    { id: 'ref-305', num: 305, text: 'People Magazine. PFAS in Smart Watch Bands.', url: 'https://people.com/smart-watch-bands-very-high-concentrations-pfas-forever-chemicals-8776525', urlText: 'News Report' },
    { id: 'ref-306', num: 306, text: 'SciTechDaily. PFAS in Wearable Devices Study.', url: 'https://scitechdaily.com/smartwatch-shock-study-finds-harmful-forever-chemicals-in-wristbands/', urlText: 'Science News' },
    { id: 'ref-307', num: 307, text: 'WJLA. PFAS Chemical Investigation Report.', url: 'https://wjla.com/features/i-team/harmful-chemicals-pfas-apple-smart-watch-fit-bit-garmin-health-fitness-device-accessories-ingredients-hazard-contaminants-fluorine-fluoroelastomer-sports-bands-polyfluoroalkyl-substances-epa-study-cancer-infertility-autoimmune-disease', urlText: 'Investigative Report' },
  ];

  const mid = Math.ceil(refs.length / 2);
  const col1 = refs.slice(0, mid);
  const col2 = refs.slice(mid);

  return (
    <section className="px-4 sm:px-8 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3 className="font-serif text-2xl font-bold mb-8 text-primary">{t.refs.title}</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {[col1, col2].map((col, ci) => (
              <div key={ci}>
                {col.map((ref) => (
                  <div key={ref.id} id={ref.id} className="mb-4 p-3 bg-white rounded-lg border-l-4 border-amber-500">
                    <strong>[{ref.num}]</strong> {ref.text}{' '}
                    <a href={ref.url} className="citation-link" target="_blank" rel="noopener noreferrer">
                      {ref.urlText}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Main App ───────────────────────────────────────────────────────────────────
export function App() {
  const [tocOpen, setTocOpen] = useState(false);

  // Close TOC on outside click (mobile)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const toc = document.querySelector('.toc-fixed');
      const toggle = document.querySelector('.toc-toggle-btn');
      if (
        tocOpen &&
        toc &&
        !toc.contains(e.target as Node) &&
        toggle &&
        !toggle.contains(e.target as Node)
      ) {
        setTocOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [tocOpen]);

  return (
    <LanguageProvider>
      <div className="bg-secondary font-sans text-primary">
        <ProgressBar />

        {/* Mobile TOC Toggle */}
        <button
          className="toc-toggle-btn fixed top-4 left-4 z-[60] p-3 bg-primary text-white rounded-lg shadow-lg lg:hidden"
          onClick={() => setTocOpen((prev) => !prev)}
        >
          <i className={`fas ${tocOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>

        {/* Mobile Language Switcher */}
        <div className="fixed top-4 right-4 z-[60] lg:hidden">
          <LanguageSwitcher />
        </div>

        <TableOfContents isOpen={tocOpen} onClose={() => setTocOpen(false)} />

        <main className="main-content">
          <HeroSection />
          <RFExposureSection />
          <BiomechanicsSection />
          <PFASSection />
          <SynthesisSection />
          <ReferencesSection />
        </main>

        <ScrollTopButton />
      </div>
    </LanguageProvider>
  );
}
