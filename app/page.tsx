const education = [
  {
    period: "Sep. 2025 – Present",
    institution: "The Hong Kong Polytechnic University",
    detail: "Ph.D. Student, Department of Building Environment and Energy Engineering (BEEE)",
  },
  {
    period: "Aug. 2024 – Jun. 2025",
    institution: "University of Colorado Boulder",
    detail: "Master of Science in Computer Science",
  },
  {
    period: "Jun. 2023 – Jan. 2024",
    institution: "Westlake University",
    detail: "Research Intern",
  },
  {
    period: "Sep. 2019 – Jun. 2023",
    institution: "Hangzhou City University",
    detail: "B.Eng. in Automation",
  },
];

const awards = [
  {
    year: "2023",
    title: "Presidential Scholarship",
    detail: "求是荣誉奖章",
  },
  {
    year: "2022",
    title: "National Scholarship",
    detail: "国家奖学金",
  },
  {
    year: "2022",
    title: "National First Prize, National College Student Intelligent Car Competition",
    detail: "第十七届全国大学生智能汽车竞赛航天物流组全国一等奖",
  },
  {
    year: "2021",
    title: "First Prize, Zhejiang Province College Student Physics Innovation (Theory) Competition",
    detail: "浙江省大学生物理创新（理论）竞赛一等奖",
  },
  {
    year: "2020",
    title: "First Prize, Zhejiang Province College Student Intelligent Robot Creative Competition",
    detail: "浙江省大学生智能机器人创意竞赛一等奖",
  },
];

const publications = [
  {
    title: "FireSeek-Sci: A Large Language Model with Fire Science Knowledge for Smart Building Safety",
    authors: (
      <>
        Yifei Ding, <strong>Hongtao Zheng</strong>, Tianyi Lu, Yuxuan Zeng, Rui Deng, Yifan Zhang, Xinyan Huang
      </>
    ),
    venue: "Journal of Infrastructure Intelligence and Resilience",
    year: "2026",
    note: "IF at acceptance: 6.5",
    href: "https://doi.org/10.1016/j.iintel.2026.100233",
  },
  {
    title: "Photorealistic fire scene video generation via multimodal large language model and pre-trained video diffusion model",
    authors: (
      <>
        <strong>Hongtao Zheng</strong>, Xinyan Huang
      </>
    ),
    venue: "Computational Visual Media",
    year: "2026",
    note: "IF at acceptance: 18.3",
    href: "https://doi.org/10.26599/CVM.2025.9450511",
  },
  {
    title: "FireSeg: A weakly supervised fire segmentation framework via pre-trained latent diffusion models",
    authors: (
      <>
        Wei Zhang*, <strong>Hongtao Zheng*</strong>, Weiran Li, Shuwen Pan, Yan Liu
      </>
    ),
    venue: "Expert Systems with Applications",
    year: "2025",
    note: "IF at acceptance: 7.5",
    href: "https://doi.org/10.1016/j.eswa.2025.126852",
  },
  {
    title: "SegLD: Achieving universal, zero-shot and open-vocabulary segmentation through multimodal fusion via latent diffusion processes",
    authors: (
      <>
        <strong>Hongtao Zheng</strong>, Yifei Ding, Zilong Wang, Xinyan Huang
      </>
    ),
    venue: "Information Fusion",
    year: "2024",
    note: "IF at acceptance: 18.6",
    href: "https://doi.org/10.1016/j.inffus.2024.102509",
  },
  {
    title: "Uncertainty Quantification for Forward and Inverse Problems of PDEs via Latent Global Evolution",
    authors: (
      <>
        Tailin Wu*, Willie Neiswanger*, <strong>Hongtao Zheng*</strong>, Stefano Ermon, Jure Leskovec
      </>
    ),
    venue: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: "2024",
    note: "Top-tier AI conference",
    href: "https://doi.org/10.1609/aaai.v38i1.27785",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="profile-column">
        <div className="profile-card">
          <div className="portrait-wrap">
            <img
              className="portrait"
              src="/images/profile.jpg"
              alt="Portrait of Hongtao Zheng"
            />
          </div>

          <h1>Hongtao Zheng</h1>
          <p className="role">Ph.D. Student</p>
          <p className="affiliation">
            Department of Building Environment and Energy Engineering (BEEE)
            <br />
            The Hong Kong Polytechnic University
          </p>

          <div className="profile-links">
            <a href="mailto:hongtao.zheng@connect.polyu.hk">
              hongtao.zheng@connect.polyu.hk
            </a>
            <a href="https://github.com/HowardZheng2001" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </aside>

      <div className="content-column">
        <section className="content-section first-section" id="about">
          <h2>About Me</h2>
          <p>
            I am currently a Ph.D. student in the Department of Building Environment and Energy Engineering at The Hong Kong Polytechnic University. My research interests include computer vision, diffusion models, multimodal large language models, fire safety, and AI for science.
          </p>
        </section>

        <section className="content-section" id="education">
          <h2>Education &amp; Research Experience</h2>
          <div className="timeline-list">
            {education.map((item) => (
              <article className="timeline-row" key={`${item.period}-${item.institution}`}>
                <div className="timeline-time">{item.period}</div>
                <div className="timeline-body">
                  <h3>{item.institution}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="service">
          <h2>Academic Service</h2>
          <p className="service-line">
            <strong>Journal Reviewer:</strong> Knowledge-Based Systems, Fire Technology, Scientific Reports, Information Fusion, International Journal of Wildland Fire, Physics of Fluids
          </p>
        </section>

        <section className="content-section" id="scholar">
          <div className="section-title-row">
            <h2>Google Scholar</h2>
            <a
              className="scholar-profile-link"
              href="https://howardzheng2001.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </div>
        
          <div className="scholar-metrics">
            <div className="scholar-header">
              <span></span>
              <span>All</span>
              <span>Since 2021</span>
            </div>
        
            <div className="scholar-row">
              <span>Citations</span>
              <strong>338</strong>
              <strong>337</strong>
            </div>
        
            <div className="scholar-row">
              <span>h-index</span>
              <strong>8</strong>
              <strong>8</strong>
            </div>
        
            <div className="scholar-row">
              <span>i10-index</span>
              <strong>8</strong>
              <strong>8</strong>
            </div>
          </div>
        
          <p className="scholar-update">
            Google Scholar metrics, updated Sep. 2026.
          </p>
        </section>
        
        <section className="content-section" id="publications">
          <h2>Publications</h2>
          <div className="publication-list">
            {publications.map((paper, index) => (
              <article className="publication-row" key={paper.title}>
                <p>
                  <span className="pub-index">[{index + 1}]</span>{" "}
                  {paper.authors}. “<span className="paper-title">{paper.title}</span>,”{" "}
                  <em>{paper.venue}</em>, {paper.year}. {paper.note}.{" "}
                  <a href={paper.href} target="_blank" rel="noreferrer">
                    [Paper]
                  </a>
                </p>
              </article>
            ))}
          </div>
          <p className="publication-note">* Equal contribution.</p>
        </section>

        <section className="content-section" id="awards">
          <h2>Honors &amp; Awards</h2>
          <div className="award-list">
            {awards.map((award) => (
              <article className="award-row" key={`${award.year}-${award.title}`}>
                <span className="award-year">{award.year}</span>
                <p>
                  <strong>{award.title}</strong>
                  <span className="award-cn">（{award.detail}）</span>
                </p>
              </article>
            ))}
          </div>
        </section>
        
        <footer>
          <p>Last updated: Sep. 2026</p>
        </footer>
      </div>
    </main>
  );
}
