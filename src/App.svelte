<script>
    import Banner from "./Banner.svelte";
    import Card from "./Card.svelte";
    import Column from "./Column.svelte";
    import Container from "./Container.svelte";
    import Flipper from "./Flipper.svelte";
    import Footer from "./Footer.svelte";
    import Navbar from "./Navbar.svelte";
    import NavbarItem from "./NavbarItem.svelte";
    import Parallax from "./Parallax.svelte";
    import ProfileImage from "./ProfileImage.svelte";
    import Row from "./Row.svelte";
    import Section from "./Section.svelte";
    import SocialIcon from "./SocialIcon.svelte";
    import SocialIconGroup from "./SocialIconGroup.svelte";
</script>

<Navbar>
    <NavbarItem link="about-me" title="About Me"/>
    <NavbarItem link="education" title="Education"/>
    <NavbarItem link="work-experience" title="Work Experience"/>
</Navbar>

<main>
    <Banner src="../images/R1-Tech-Center.png">
        <ProfileImage src="images/brad-profile.jpg" alt="Brad Van Fleet"></ProfileImage>
        <Flipper elements="{['C#','ASP.NET','Python','Azure']}" period="7000">
            I am skilled in:
        </Flipper>
    </Banner>

    <Container>
        <Section id="about-me">
            <h2>About Me</h2>
        
            <p>I am a software developer from central Utah.</p>
            <p>
                Growing up I knew I was going to be a scientist. However, I didn't know that it was going to be a
                computer scientist. My initial plan, fueled by Cartoon Network's Dexter's Lab, was to become a chemist.
                After failing AP Chemistry in my senior year of high school, I decided that I wasn't cut out to be a
                chemist. I then decided that my passion was computers and technology.
            </p>
            <p>
                It wasn't until I returned from a mission for the Church of Jesus Christ of Latter-Day Saints that I began
                finding my niche within computers. Originally, I was going to be a game developer. I began studying at Utah
                Valley University and attended a career tour of EA Games (before they shut down their SLC office).
            </p>
            <p>
                My biggest pet peeve from EA, companies that hire computer scientists to do a job they <em>feel</em> a
                12-year-old can do. Thanks EA Games. After the tour, I determined that my next step was to complete a
                computer science degree, but not for game development.
            </p>
            <p><em>And here we are...</em></p>

            <h4>Hobbies</h4>
            <p>Below are a few hobbies that I engage in when I'm not developing software professionally</p>
            <Row>
                <Column size="sm">
                    <ul>
                        <li>Home data center</li>
                        <li>Watch movies</li>
                    </ul>
                </Column>
                <Column size="sm">
                    <ul>
                        <li>Gardening</li>
                        <li>Play violin</li>
                    </ul>
                </Column>
                <Column size="sm">
                    <ul>
                        <li>Build websites and software</li>
                        <li>Bake bread and cook</li>
                    </ul>
                </Column>
            </Row>
        </Section>
    
        <Section id="education">
            <h2>Education</h2>
    
            <h4>Utah Valley University</h4>
            <p><strong>Bachelor's of Science Computer Science</strong> <em class="text-right">Aug 2014 - May 2023</em></p>
            <p>Courses Taken:</p>
            <Row>
                <Column size="md">
                    <ul>
                        <li>CS2540 &mdash; Software Engineering</li>
                        <li>CS2550 &mdash; Web Programming I</li>
                    </ul>
                </Column>
                <Column size="md">
                    <ul>
                        <li>CS3260 &mdash; C# .NET Programming</li>
                        <li>CS3270 &mdash; Python Software Development</li>
                    </ul>
                </Column>
            </Row>
    
            <h4>Projects</h4>
            <p><strong>Patient Data Aggregation Platform (Medical Assistant)</strong></p>
            <ul>
                <li>
                    Developed Angular 7/Bootstrap web application for patients to access medical data against a blockchain data store
                </li>
                <li>
                    Integrated Ethereum blockchain and Inter-Planetary File System platforms for data security and storage
                </li>
                <li>
                    Participated in a collaborative research paper submitted to the American Council on Science and Education 2019 International Conference on Health Information and Medical Systems
                </li>
            </ul>
    
            <p><strong>Personal Financial Planner (Data Acquisition Service)</strong></p>
            <ul>
                <li>
                    Developed a Python data acquisition pipeline engine for building datasets from data ingested from rest API sources.
                </li>
                <li>
                    Led a team of 3-4 other research assistants in development of both the data acquisition service and VueJS web application.
                </li>
                <li>
                    Developed a simple web application using VueJS (v2) to provide a user interface for the data acquisition pipeline and prototype financial planning use cases defined by the lead researcher.
                </li>
            </ul>
        </Section>
    </Container>

    <Parallax src="../images/uvu-campus.jpg"></Parallax>

    <Container>
        <Section id="work-experience">
            <h2>Experience</h2>
            <p>Below are the most recent organizations that I have provided professional work for:</p>
            <Row>
                <Card size="lg">
                    <div slot="header">
                        <h3>R1 RCM</h3>
                        <p><strong>Software Developer</strong> <em class="text-right">Oct 2021 - Present</em></p>
                    </div>
                    <div slot="content">
                        <p>Responsibilities:</p>
                        <ul>
                            <li>
                                Contributed to the C# .NET code repository and participated in an agile/scrum team
                            </li>
                            <li>
                                Provided code review feedback and helped to ensure software quality
                            </li>
                        </ul>
                    </div>
                </Card>
                <Card size="lg">
                    <div slot="header">
                        <h3>Health Catalyst</h3>
                        <p><strong>Software Developer</strong> <em class="text-right">Jun 2018 - Sep 2021</em></p>
                    </div>
                    <div slot="content">
                        <p>Responsibilities:</p>
                        <ul>
                            <li>
                                Program ETL piplines and Windows service in C# .NET against a SQL Server database and maintain legacy SSIS product codebase
                            </li>
                            <li>
                                Participate in daily SCRUM meetings to discuss needs and progress
                            </li>
                            <li>
                                Assist with desgin and review for Data Operating System platform engine features, including code testing
                            </li>
                        </ul>
                    </div>
                </Card>

                <Card size="lg">
                    <div slot="header">
                        <h3>DoxTek</h3>
                        <p><strong>Technical Support Engineer</strong> <em class="text-right">Nov 2016 - May 2018</em></p>
                    </div>
                    <div slot="content">
                        <p>Responsibilities:</p>
                        <ul>
                            <li>
                                Assisted other organization's IT and support departments regarding to Kofax, OnBase, and DoxTek customizations
                            </li>
                            <li>
                                Handled in-office helpdesk support for network security using Active Directory, phones, internet, and workstations &mdash; re-imaging workstations where necessary
                            </li>
                            <li>
                                Planned and completed internal server upgrades and network security improvements
                            </li>
                        </ul>
                    </div>
                </Card>
            </Row>
        </Section>
    </Container>
</main>

<Parallax src="../images/mt-timp.jpg" height="2"></Parallax>

<Footer>
    <SocialIconGroup>
        <SocialIcon location="https://github.com/bvanfleet" ariaLabel="View GitHub profile" icon="github-square"></SocialIcon>
        <SocialIcon location="https://www.linkedin.com/in/vanfleetb/" ariaLabel="View LinkedIn Profile" icon="linkedin"></SocialIcon>
    </SocialIconGroup>
    <p class="text-center">Copyright &copy; 2019-2022 Brad Van Fleet</p>
</Footer>
