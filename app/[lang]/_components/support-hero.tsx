import type { Dictionary } from "@/i18n/dictionaries";

type Props = {
  dictionary: Dictionary;
};

export function SupportHero({ dictionary }: Props) {
  const t = dictionary.supportPage;

  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, rgba(253,207,80,0.18) 0%, #fffdf7 20%, #ffffff 55%, #fafafa 100%)",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 24px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "rgba(253, 207, 80, 0.18)",
            color: "#7a5a00",
            fontWeight: 700,
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: "#FDCF50",
              display: "inline-block",
            }}
          />
          {t.badge}
        </div>

        <div
          style={{
            width: "180px",
            height: "180px",
            margin: "0 auto 28px",
            borderRadius: "32px",
            background:
              "radial-gradient(circle at top, rgba(253,207,80,1), rgba(253,207,80,0.72) 50%, rgba(253,207,80,0.22) 78%, rgba(255,255,255,0) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "132px",
              height: "132px",
              borderRadius: "26px",
              background: "#FDCF50",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 24px 60px rgba(253, 207, 80, 0.34)",
              color: "#111",
              fontWeight: 900,
              fontSize: "24px",
              letterSpacing: "0.08em",
            }}
          >
            {t.logoLabel}
          </div>
        </div>

        <h1
          style={{
            fontSize: "52px",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            margin: "0 auto 18px",
            color: "#111",
            maxWidth: "950px",
          }}
        >
          {t.title}
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#4b4b4b",
            maxWidth: "900px",
            margin: "0 auto 14px",
          }}
        >
          {t.subtitle}
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.9,
            color: "#666",
            maxWidth: "900px",
            margin: "0 auto 28px",
          }}
        >
          {t.heroNote}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              background: "#111",
              color: "#fff",
              padding: "24px",
              borderRadius: "24px",
            }}
          >
            <div
              style={{ fontSize: "28px", fontWeight: 800, marginBottom: "8px" }}
            >
              {t.stat1Number}
            </div>
            <div style={{ color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
              {t.stat1Label}
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.06)",
              padding: "24px",
              borderRadius: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
                marginBottom: "8px",
                color: "#111",
              }}
            >
              {t.stat2Number}
            </div>
            <div style={{ color: "#666", fontSize: "14px" }}>
              {t.stat2Label}
            </div>
          </div>

          <div
            style={{
              background: "#FDCF50",
              color: "#111",
              padding: "24px",
              borderRadius: "24px",
              boxShadow: "0 16px 40px rgba(253, 207, 80, 0.24)",
            }}
          >
            <div
              style={{ fontSize: "28px", fontWeight: 800, marginBottom: "8px" }}
            >
              {t.stat3Number}
            </div>
            <div style={{ color: "#5c4b08", fontSize: "14px" }}>
              {t.stat3Label}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 24px 24px",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "28px",
            padding: "28px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.04)",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "14px",
              fontSize: "28px",
              color: "#111",
            }}
          >
            {t.helpTitle}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "14px",
            }}
          >
            {[t.help1, t.help2, t.help3, t.help4].map((item) => (
              <div
                key={item}
                style={{
                  background: "#fafafa",
                  border: "1px solid rgba(0,0,0,0.05)",
                  borderRadius: "18px",
                  padding: "16px 18px",
                  color: "#444",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 24px 24px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "22px",
            color: "#111",
            textAlign: "center",
          }}
        >
          {t.featuresTitle}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          {[
            { title: t.feature1Title, text: t.feature1Text },
            { title: t.feature2Title, text: t.feature2Text },
            { title: t.feature3Title, text: t.feature3Text },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  background: "rgba(253, 207, 80, 0.22)",
                  marginBottom: "16px",
                }}
              />
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "20px",
                  color: "#111",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#666",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px 24px 70px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#111",
              color: "#fff",
              padding: "32px",
              borderRadius: "28px",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                marginTop: 0,
                marginBottom: "14px",
              }}
            >
              {t.sectionTitle}
            </h3>
            <p
              style={{
                margin: 0,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              {t.sectionText}
            </p>
          </div>

          <div
            style={{
              background: "#FDCF50",
              color: "#111",
              padding: "32px",
              borderRadius: "28px",
              boxShadow: "0 18px 40px rgba(253, 207, 80, 0.22)",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                marginTop: 0,
                marginBottom: "14px",
              }}
            >
              {t.contactTitle}
            </h3>
            <p
              style={{
                margin: 0,
                lineHeight: 1.9,
                color: "#3b320f",
              }}
            >
              {t.contactText}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
