<template>
  <div>
    <!-- <Header :projectsTOD="projectsTOD" :projectsTDD="projectsTDD" :selectedTODProject="selectedTODProject" :selectedTDDProject="selectedTDDProject" /> -->

<!-- header -->
    <div class="header">
      <div class="header-interior">
        <img src="images/gbplacemakinglogolofi.png">
        <div id="nav" class="dropdown">
          <a href="#">Home</a> |
          <span class="services-parent">
            <a href="#services" class="services-parent">Services</a> |
            <div class="services-content">
              <p class="services"><a href="#projectsTOD">Transit Oriented Development</a></p>
              <p class="services"><a href="#projectsTDD">Transit Designed for Development</a></p>
            </div>
          </span>
          <span class="projects-parent">
            <a href="#projectsTOD">Projects</a> |
            <div class="projects-content">
              <p v-for="project in projectsTOD" :key="project.key" class="services"><a href="#projectsTOD" @click="selectTODProject(project)"> {{ project.title }}</a></p>
              <hr>
              <p v-for="project in projectsTDD" :key="project.key" class="services"><a href="#projectsTDD" @click="selectTDDProject(project)"> {{ project.title }}</a></p>
            </div>
          </span>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>

    <div class="home">
      <Carousel :slides="slides"/>

      <div class="block">
        <h3>
          Transformative experience you can count on.
        </h3>
        <p>GB Arrington is one of the world’s most respected innovators in Transit Oriented Development (TOD). His focus is in strategically forging the link between transit and development to catalyze equitable community revitalization and place making. GB brings the insights and knowledge garnered from four decades of successfully shaping development, public policy, land use plans and transit projects at the scale of the region, the corridor and individual sites.</p>
      </div>
        <img src="images/Platform_0005Web-min.jpg" class="project">
      <a id="projects"></a>
      <div class="block upmargin" id="services">

        <h3>Transit Oriented Development</h3>
        <p>GB Place Making brings forty years of successfully forging the link between transportation and land use to catalyze equitable community revitalization, sustainable development and place making. GB has directed 125+ TOD plans and helped communities in more than 25 states and 8 countries to capitalize on their access to transit to create communities of lasting value.</p>

      </div>

  <!-- TOD projects  -->



<br><br>

      <div class="projects-holder">
        <div v-for="project in projectsTOD" class="projects" :key="project.key" v-bind:style="{ backgroundImage : 'url(' + project.imagepath + ')' }" v-on:click="selectTODProject(project)" :class="{ selected : project == selectedTODProject }">
          <div class="projects-cover">
            <span class="projects-overlay">{{ project.title }}</span>
          </div>
        </div><!-- v-for projects -->
      </div><!-- projets-holder -->



      <MyProjects :project="selectedTODProject" id="projectsTOD"/>

      <div class="block upmargin" id="services">

        <h3>Transit Designed for Development</h3>
        <p>GB Place Making brings a proven partner to help ensure success linking transit design and city shaping. GB’s groundbreaking experience on transit projects balances place making, great transit, TOD, seamless community integration and private development to create communities that are livable, walkable and vibrant. GB has shaped transit design in more than two dozen communities spanning every major mode – bus rapid transit, streetcar, light rail, commuter rail, heavy rail, and high speed rail.
        </p>
      </div>

  <!-- TDD projects -->

      <div class="projects-holder">
        <div v-for="project in projectsTDD" class="projects" :key="project.key" v-bind:style="{ backgroundImage : 'url(' + project.imagepath + ')' }" v-on:click="selectTDDProject(project)" :class="{ selected: project == selectedTDDProject }">
          <div class="projects-cover">
            <span class="projects-overlay">{{ project.title }}</span>
          </div>
        </div><!-- v-for projects -->
      </div><!-- projets-holder -->



      <MyProjects :project="selectedTDDProject" id="projectsTDD"/>

      <Contact/>

    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import MyProjects from "@/components/MyProjects.vue";
import Contact from "@/components/Contact.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    MyProjects,
    Contact,
    Header
  },
  created: function() {
    this.selectedTODProject = this.projectsTOD.tysons;
    this.selectedTDDProject = this.projectsTDD.beijing;
  },
  methods: {
    selectTODProject: function(project) {
      this.selectedTODProject = project;
    },
    selectTDDProject: function(project) {
      this.selectedTDDProject = project;
    }
  },
  data: function() {
    return {
      // selectedSlide: 0,
      selectedTODProject: Object,
      selectedTDDProject: Object,
      projectsTOD: {
        tysons: {
          title: "Suburban Reinvention",
          titlelong: "Transforming Tysons Corner",
          content:
            "Reinventing the suburbs to become walkable urban places is a special challenge in creating vibrant communities. GB directed development of the plan now guiding the transformation of Tysons Corner, Virginia into America’s largest TOD. The plan, which incorporates 95% of all growth within a 3-minute walk of four Metrorail stops and three planned circulator routes, envisions 200,000 new jobs, 100,000 new residents, affordable housing, a dense street grid, and a network of parks. Since the plan’s completion, a $2.6 billion Metrorail extension has opened, developers have contributed $400 million and three new Fortune 500 companies have joined others in the area. The innovative plan has been widely heralded in the national media for creating a new model for suburban transformation. In 2011, the comprehensive plan received the Daniel Burnham Award, https://www.planning.org/awards/2011/ the American Planning Association’s (APA) most prestigious prize.",
          imagepath: "images/tysonsMap-min.jpg",
          imagecredit: "Fairfax County",
          key: 1
        },
        portland: {
          title: "Groundbreaking TOD",
          titlelong: "Created a model for TOD in Portland",
          content:
            "GB’s innovative work on TOD has served as a national model for how to link transit and land use to create livable communities. GB created and led the multi-jurisdictional TOD planning for Portland’s first two Light Rail Transit (LRT) lines – the east side and west side lines. Those station area plans have guided billions of dollars in TOD development around the stations. GB also created the TOD implementation programs for Portland’s transit agency, TriMet and Portland Metro, the regional government. TriMet estimates that $13.6 billion worth of development has occurred around its light rail stations.",
          imagepath: "images/RoundTitleslide1.jpg",
          imagecredit: false,
          key: 2
        },
        bartTOD: {
          title: "Tomorrow's Best Practices",
          titlelong: "BART TOD Guidelines",
          content:
            "Over the past three decades BART has evolved to become one of America’s most innovative transit agency TOD programs.  Not content to rest on its laurels, BART has pushed the envelope further by retooling what it expects from and how it undertakes TOD. Guided by a new TOD Policy and TOD Guidelines BART has raised the bar on its expectations for success, stepped up to help address the Bay Area’s affordable housing crisis, and is weaning its long addiction to commuter parking when TOD can deliver better outcomes. As project manager, GB Arrington played a key role in helping BART retool its TOD program, develop a new TOD policy and take the strategic steps necessary to proactively move TOD implementation to the next level of performance:",
          bullets: [
            "TOD Guidelines – what BART encourages in the planning and design of TOD",
            "Joint Development solicitation – refined their solicitation process",
            "What BART desires in TOD – performance targets including minimum densities & no minimum parking"
          ],
          imagepath: "images/MinnTargetLRT+Northstar296.jpg",
          imageextra: "images/MissionBayKingSWEB-min.jpg",
          key: 3
        },
        dubai: {
          title: "Audacious TOD",
          titlelong: "Dubai Metro Master Plans",
          content:
            "Dubai has set a global standard for signature development and wanted a transit system and transit oriented development to match. GB directed the preparation of master plans for 16 sites along the Dubai Metro anchoring the downtowns for new and old Dubai. Success required fundamentally re-examining Dubai planning principles and leveraging the value of the Dubai Metro. The plans coordinated and integrated TOD best practices to create detailed designs for walkable 18-hour communities. A special challenge was winning stakeholders’ understanding and acceptance of the full spectrum of TOD principles and beneﬁts. The detailed development program comprises over 160 million square feet of new construction, including over 55,000 housing units, over 43 million square feet of office space, and 14 million square feet of retail.",
          imagepath: "images/DubaiDay-min.jpg",
          imageextra: "images/DubaiPlot8-min.jpg",
          imagecredit: "Dubai RTA",
          key: 4
        },
        effectsTOD: {
          title: "Cutting Edge Research",
          titlelong: "Effects of TOD on Housing, Parking & Travel",
          content:
            "Intuitively, linking land use and transit to TOD should result in fewer car trips and a host of other benefits. In an effort to document how automobile use of residential TOD is different from conventional development, a team led by GB Arrington was hired by the Transportation Cooperative Research Board of the National Academies. The national research confirmed for the first-time what practitioners have assumed for some time-- residential TODs produce half as many daily automobile trips as conventional development. The research’s key conclusion is that Institute of Traffic Engineers’ trip generation and parking generation rates overestimate automobile trips for TOD housing by approximately 50 percent. Other key conclusions of the research include:",
          bullets: [
            "TOD households are twice as likely to not own a car and own roughly half as many cars as comparable households not living in TODs.",
            "Among the factors that attract households to TOD, neighborhood design, home prices and perceived value, and transit proximity consistently were placed in high value.",
            "Transit ridership is positively correlated to the extensiveness of the transit system, amount of traffic congestion and higher parking costs."
          ],
          imagepath: "images/Parking-min.jpg",
          imageextra: "images/AmbroseTOD.Dallasweb_WC-min.jpg",
          imagecredit: false,
          key: 5
        },
        todstrategies: {
          title: "TOD implementation",
          titlelong: "Impactful TOD Strategies",
          content:
            "As TOD moves increasingly from planning theory to practice, agencies are increasingly seeking the insights to enhance their effectiveness in enabling TOD. GB’s experience is unparalleled in helping craft and deliver the right strategy for realizing TOD. He brings the critical knowledge gained from creating and managing the influential TOD programs at both Portland’s TriMet and Metro, and as the project manager of Maryland’s Governors Task Force on TOD, the District of Columbia’s Mayors TOD Task Force, Denver RTD’s TOD Strategic Plan, the Met Council TOD Strategic Plan, the Prince Georges County TOD Strategy and California’s Statewide TOD Study. This experience has taught him no two places are the same and what works in one community won’t necessarily work in another.",
          imagepath: "images/Denver_0028_-min.jpg",
          imagecredit: false,
          key: 6
        }
      },
      projectsTDD: {
        beijing: {
          title: "Beijing New Town",
          titlelong: "Yizhuang New Town",
          content:
            "Yizhuang New Town is an outgrowth of Beijing, China’s Urban Development Plan. Yizhuang is an important economic development industrial zone in the southeastern area of Beijing and is connected to the capital by the Beijing Subway. GB Arrington served as project manager for this high-level assignment. The project provided strategic recommendations for an integrated transportation and land use plan to enable Yizhuang to grow from 100,000 people to 700,000 people in 15 years; featured a multimodal station serving high-speed rail, the now open extension of Beijing’s Metro, a bus rapid transit line and an intercity commuter rail line; and included a land use pattern of sustainable development. The plan included:",
          bullets: [
            "Strategic level recommendations for an integrated transportation and land use plan",
            "Urban design plan at a sketch-level",
            "Case studies illustrating American best practice for sustainable development",
            "Principles for TOD and Development-Oriented Transit",
            "Alignment of new transit lines, location of stations and roadway circulation"
          ],
          imagepath: "images/Yizhuang06-min.jpg",
          imageextra: "images/VancouverNight2018-min.jpg",
          key: 1
        },
        denver: {
          title: "Reshaping Transit",
          titlelong: "Denver FasTracks",
          content:
            "GB balances people moving and city shaping in transit design to optimize transit operations, community fit, urban design and economic development. Working with the Denver RTD design team, cities, developers and landowners, GB applied DOT principles to the entire 119 mile $4.7 Billion FasTracks system. Week long interactive design charrettes were held for each corridor. Station designs were modified and station locations were shifted to enable the creation of transit-oriented communities around FasTracks’ 53 stations.  GB’s work with DOT has reshaped major transit projects across the globe now in operation or with detailed designs for Portland, Los Angeles, Phoenix, Minneapolis, Honolulu, Durham, Ft Lauderdale, Denver, Australia’s Gold Coast and Auckland, New Zealand.",
          imagepath: "images/West_0006-min.jpg",
          imageextra: "images/DUS_StationTOD0002-min.jpg",
          imagecredit: false,
          key: 2
        },
        westside: {
          title: "Leveraging a Subway",
          titlelong: "Westside  Subway Los Angeles",
          content:
            "Los Angeles’s top transit priority, the “subway to the sea”, has been an enduring dream for decades. GB helped to shape the project’s design and defined a path for Metro and the cities of Los Angeles and Beverly Hills to capture the land use benefits of this multi-billion dollar investment. Scenario testing helped to frame TOD planning now underway. GB prepared a station urban design report, recommendations on station locations and portal placement, assessed local plans and policies for transit-friendliness, and developed a TOD program for the corridor. GB also oversaw the preparation of land use and economic development New Starts templates that contributed to the project getting a high rating from the federal government and moving into construction.",
          imagepath: "images/BeachSunSetdabs171a_edited-1.jpg",
          imageextra: "images/WilshireVermont52-min.jpg",
          imagecredit: false,
          key: 3
        },
        highspeedrail: {
          title: "High Speed Rail",
          titlelong: "California High Speed Rail",
          content:
            "Capturing the value of California High-Speed Rail (CAHSR) will not happen quickly or easily. Experience from across the globe points to the importance of acting proactively to crack open the transformative power of CAHSR to reshape land use and economic development in and around its 24 stations. GB Arrington has provided on-going policy, design and strategic advice to the California High Speed Rail Authority on how to capture the land use, economic development and financial benefits derived as a result of the program. He helped the Authority think through the organizational and implementation steps necessary to align a world-class train with the market for real estate, having ready land for development, putting supportive land use plans and incentives in place, removing the barriers to development, designing and constructing stations to fit into and complement the communities they are intended to serve. GB was responsible for developing:",
          bullets: [
            "A joint development / value capture framework, timeline and responsibilities",
            "HSR TOD organizational steps, barriers and capability assessment",
            "Global best practice for stations and redevelopment",
            "Urban Design Guidelines addressing aesthetic and functional approaches to fit CAHSR into the communities it serves"
          ],
          imagepath: "images/CAHSRcover-min.jpg",
          imageextra: "images/SunnySteps-min.jpg",
          imagecredit: false,
          key: 4
        },
        target: {
          title: "Station + TOD",
          titlelong: "Target Field Station Minneapolis",
          content:
            "Understanding the intersection of making transit work and place making can lead to critical design breakthroughs. In Minneapolis, GB led urban design workshops that resulted in changing the project design to realign the tracks to open the station up to the neighborhood, activate the public realm and to help spur growth in the North Loop. The $85m sweeping multi-level Target Field Station opened in 2014 and includes a park, jumbo screen, retail stores, a public plaza and a major development parcel as part of the rail hub next to Target Field.",
          imagepath: "images/InterchangeMay2014-min.jpg",
          imageextra: "images/MinnTargetLRT+Northstar296.jpg",
          imagecredit: false,
          key: 5
        },
        bart: {
          title: "Transforming Stations",
          titlelong: "BART 21st Century Stations",
          content:
            "GB has a track record of helping clients move in a new direction in response to changing needs and trends. For BART, GB developed a transformational strategy guiding how BART connects to the community and creates people places while updating and modernizing its facilities. With its roots in the 1960s BART was designed to serve the bygone needs of a different era. Meeting the contemporary needs of tomorrow’s riders and a changing region required breaking the old mold. Twenty-first century stations use TOD and place making to help drive change while accomplishing three objectives: making transit work, connecting transit to the community and creating places people want to be. GB came up with a design toolbox and evolutionary station prototypes that provide practical and aspirational examples of how BART can evolve into a 21st century system.",
          imagepath: "images/ART.SouthBankMelbourne110-min.jpg",
          imageextra: "images/FruitvaleWeb0086-min.jpg",
          imagecredit: false,
          key: 6
        }
      },
      slides: [
        {
          image: "images/NewLynnNewZealandweb-min.jpg",
          caption:
            '"[T]he world’s foremost authority on TOD policy, design and implementation."',
          captionsayer: "Urban Development Institute of Australia",
          id: 1
        },
        {
          image: "images/tysonWest_v1-min.jpg",
          caption:
            "GB’s plan is transforming Tysons Corner into America’s largest TOD",
          captionsayer:
            '"10 Ideas for Changing the World Right Now."  Time Magazine',
          imagecredit: "Fairfax County",
          id: 2
        },
        {
          image: "images/carousel-dosha.jpg",
          // image: "images/1510Web-min.jpg",
          caption:
            "GB’s work changed the face of transit and land use in Portland",
          captionsayer:
            "Presidential Design Award, The White House, Westside Light Rail",
          id: 3
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.block {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}
.upmargin {
  margin-top: 100px;
}
h3 {
  margin-bottom: 20px;
}
img.project {
  width: 100vw;
}
// img.cropped {
//   position: relative;
//   border: 0px;
//   width: 100%;
//   height: 100%;
//   filter: brightness(80%) grayscale(70%);
//   margin-top: 0px;
//   padding-bottom: 0px;
//   &:hover {
//     filter: grayscale(0%) brightness(100%);
//     cursor: pointer;
//   }
// }
// img.cropped.selected {
//   filter: grayscale(0%) brightness(100%);
//   cursor: pointer;
// }
.projects {
  width: 33.33%;
  height: 10vw;
  display: inline-block;
  background-size: cover;
}
.projects-cover {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    .projects-overlay {
      // color: black;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
.projects-holder {
  width: 100vw;
  margin-bottom: 100px;
  display: flex;
  flex-flow: wrap;
  position: relative;
}
.projects-overlay {
  z-index: 3;
  color: white;
  font-size: 1.25em;
  text-align: center;
  padding: 0.25em;
  width: 100%;
}
.selected {
  z-index: 2;
  // background-color: rgba(255, 255, 255, 1);
  background-color: rgba(0,0,0,0);
  // background-color:
  .projects-overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.fakelink {
  font-weight: bold;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
}
.gbarrington {
  width: 400px;
}

// ####################################################################
// header

.header {
  top: 0px;
  background-color: white;
  // border-bottom: 1px solid #aaaaaa;
  .header-interior {
    background-color: white;
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }
}
#nav {
  margin-right: 50px;
  a {
    font-weight: bold;
    color: #2c3e50;
    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}
.dropdown {
  position: relative;
  display: inline-block;
}
p.services {
  width: 100%;
  padding: 0.25em 0em 0.25em 1em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    a {
      color: white !important;
    }
  }
}
// p.services:first {
//   text-decoration: underline;
// }
.projects-content,
.services-content {
  display: none;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.97);
  min-width: 400px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  // padding: 12px 16px;
  z-index: 5;
  a {
    // width: 100%;
    font-weight: 400 !important;
  }
}
.services-parent:hover .services-content {
  display: block;
}
.projects-parent:hover .projects-content {
  display: block;
}
.projects-content,
.services-content {
  a {
    text-decoration: none;
    line-height: 2em;
    // width: 100%;
    padding: 0.25em;
  }
}
.projects-content,
.services-content {
  a:hover {
    // text-decoration: underline;
    color: white !important;
    // background-color: rgba(0,0,0,0.7);
  }
}
p.nonselect {
  color: grey;
}
hr {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
