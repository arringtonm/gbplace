<template>
  <div class="home">
    <!-- <Carousel image="carousel-dosha-min.jpg"/> -->
    <Carousel :slides="slides"/>
    <div class="block">
      <h3>
        Transformative experience you can count on.
      </h3>
      <p>GB Arrington is one of the world’s most respected innovators in Transit Oriented Development (TOD). His focus is in strategically forging the link between transit and development to catalyze equitable community revitalization and place making. GB brings the insights and knowledge garnered from four decades of successfully shaping development, public policy, land use plans and transit projects at the scale of the region, the corridor and individual sites.</p>
    </div>
      <img src="images/Platform_0005Web-min.jpg" class="project">
    <div class="block upmargin" id="services">

      <h3>Transit Oriented Development</h3>
      <p>GB Place Making brings forty years of successfully forging the link between transportation and land use to catalyze equitable community revitalization, sustainable development and place making. GB has directed 125+ TOD plans and helped communities in more than 25 states and 8 countries to capitalize on their access to transit to create communities of lasting value.</p>

    </div>

<!-- TOD projects  -->

    <div class="projects-holder">
      <div v-for="project in projectsTOD" class="projects" :key="project.key">
        <img :src="project.imagepath" class="cropped" v-on:click="selectTODProject(project)" v-bind:class="{ selected: project == selectedTODProject }">

        <p><span v-on:click="selectTODProject(project)" class="fakelink" v-bind:class="{ fakelinkselected: project == selectedTODProject }">{{ project.titlelong }}</span></p>
        <!--  v-bind:key="project.key"
              v-bind:class="{ selected: project == this.selectedProject }"
       -->
        <div class="projects-overlay">
          <!-- <p>{{ project.title }}</p> -->
        </div>
      </div>
    </div>
    <MyProjects :project="selectedTODProject" id="projectsTOD"/>

    <div class="block upmargin" id="services">

      <h3>Transit Designed for Development</h3>
      <p>GB Place Making brings a proven partner to help ensure success linking transit design and city shaping. GB’s groundbreaking experience on transit projects balances place making, great transit, TOD, seamless community integration and private development to create communities that are livable, walkable and vibrant. GB has shaped transit design in more than two dozen communities spanning every major mode – bus rapid transit, streetcar, light rail, commuter rail, heavy rail, and high speed rail.
      </p>
    </div>

<!-- TDD projects -->

    <div class="projects-holder">
      <div v-for="project in projectsTDD" class="projects" :key="project.key">
        <img :src="project.imagepath" class="cropped" v-on:click="selectTDDProject(project)" v-bind:class="{ selected: project == selectedTDDProject }">

        <p><span v-on:click="selectTDDProject(project)" class="fakelink" v-bind:class="{ fakelinkselected: project == selectedTDDProject }">{{ project.titlelong }}</span></p>

        <!--  v-bind:key="project.key"
              v-bind:class="{ selected: project == this.selectedProject }"
       -->
        <div class="projects-overlay">
          <!-- <p>{{ project.title }}</p> -->
        </div>
      </div>
    </div>
    <MyProjects :project="selectedTDDProject" id="projectsTDD"/>


    <div id="contact">
      <div class="block upmargin">
        <img src="images/1GBArringtonBW-min.jpg" alt="GB Arrington" class="gbarrington">
        <h3>Contact Us</h3>
        <form action="https://formspree.io/arrington.gb@gmail.com"
      method="POST">
            <input type="text" name="name">
            <input type="email" name="_replyto">
            <input type="submit" value="Send">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import MyProjects from "@/components/MyProjects.vue";

export default {
  name: "home",
  components: {
    Carousel,
    MyProjects
  },
  created: function() {
    this.selectedTODProject = this.projectsTOD.tysons;
    this.selectedTDDProject = this.projectsTDD.bart;
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
          title: "Tysons Corner",
          titlelong: "Transforming Tysons Corner",
          content:
            "Reinventing the suburbs to become walkable urban places is a special challenge in creating vibrant communities. GB directed development of the plan now guiding the transformation of Tysons Corner, Virginia into America’s largest TOD. The plan, which incorporates 95% of all growth within a 3-minute walk of four Metrorail stops and three planned circulator routes, envisions 200,000 new jobs, 100,000 new residents, affordable housing, a dense street grid, and a network of parks. Since the plan’s completion, a $2.6 billion Metrorail extension has opened, developers have contributed $400 million and three new Fortune 500 companies have joined others in the area. The innovative plan has been widely heralded in the national media for creating a new model for suburban transformation. In 2011, the comprehensive plan received the Daniel Burnham Award, https://www.planning.org/awards/2011/ the American Planning Association’s (APA) most prestigious prize.",
          imagepath: "images/tysonsMap-min.jpg",
          imagecredit: "Fairfax County",
          key: 1
        },
        portland: {
          title: "Portland TOD",
          titlelong: "Created a model for TOD in Portland",
          content:
            "GB’s innovative work on TOD has served as a national model for how to link transit and land use to create livable communities. GB created and led the multi-jurisdictional TOD planning for Portland’s first two Light Rail Transit (LRT) lines – the east side and west side lines. Those station area plans have guided billions of dollars in TOD development around the stations. GB also created the TOD implementation programs for Portland’s transit agency, TriMet and Portland Metro, the regional government. TriMet estimates that $13.6 billion worth of development has occurred around its light rail stations.",
          imagepath: "images/RoundTitleslide1.jpg",
          imagecredit: false,
          key: 2
        },
        bartTOD: {
          title: "BART TOD Guidelines",
          titlelong: "Tomorrow's Best Practices",
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
          title: "Dubai Metro",
          titlelong: "Dubai Metro Master Plans",
          content:
            "Dubai has set a global standard for signature development and wanted a transit system and transit oriented development to match. GB directed the preparation of master plans for 16 sites along the Dubai Metro anchoring the downtowns for new and old Dubai. Success required fundamentally re-examining Dubai planning principles and leveraging the value of the Dubai Metro. The plans coordinated and integrated TOD best practices to create detailed designs for walkable 18-hour communities. A special challenge was winning stakeholders’ understanding and acceptance of the full spectrum of TOD principles and beneﬁts. The detailed development program comprises over 160 million square feet of new construction, including over 55,000 housing units, over 43 million square feet of office space, and 14 million square feet of retail.",
          imagepath: "images/DubaiDay-min.jpg",
          imageextra: "images/DubaiPlot8-min.jpg",
          imagecredit: "Dubai RTA",
          key: 4
        },
        effectsTOD: {
          title: "Effects of TOD on Housing, Parking & Travel",
          titlelong: "Cutting Edge Research",
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
          title: "TOD Strategies",
          titlelong: "Impactful Agency TOD Strategies",
          content:
            "As TOD moves increasingly from planning theory to practice, agencies are increasingly seeking the insights to enhance their effectiveness in enabling TOD. GB’s experience is unparalleled in helping craft and deliver the right strategy for realizing TOD. He brings the critical knowledge gained from creating and managing the influential TOD programs at both Portland’s TriMet and Metro, and as the project manager of Maryland’s Governors Task Force on TOD, the District of Columbia’s Mayors TOD Task Force, Denver RTD’s TOD Strategic Plan, the Met Council TOD Strategic Plan, the Prince Georges County TOD Strategy and California’s Statewide TOD Study. This experience has taught him no two places are the same and what works in one community won’t necessarily work in another.",
          imagepath: "images/Denver_0028_-min.jpg",
          imagecredit: false,
          key: 6
        }
      },
      projectsTDD: {
        bart: {
          title: "BART Stations",
          titlelong: "BART 21st Century Stations",
          content:
            "GB has a track record of helping clients move in a new direction in response to changing needs and trends. For BART, GB developed a transformational strategy guiding how BART connects to the community and creates people places while updating and modernizing its facilities. With its roots in the 1960s BART was designed to serve the bygone needs of a different era. Meeting the contemporary needs of tomorrow’s riders and a changing region required breaking the old mold. Twenty-first century stations use TOD and place making to help drive change while accomplishing three objectives: making transit work, connecting transit to the community and creating places people want to be. GB came up with a design toolbox and evolutionary station prototypes that provide practical and aspirational examples of how BART can evolve into a 21st century system.",
          imagepath: "images/ART.SouthBankMelbourne110-min.jpg",
          imageextra: "images/FruitvaleWeb0086-min.jpg",
          imagecredit: false,
          key: 7
        },
        denver: {
          title: "Denver FasTracks",
          titlelong: "Denver FasTracks Development Oriented Transit",
          content:
            "GB balances people moving and city shaping in transit design to optimize transit operations, community fit, urban design and economic development. Working with the Denver RTD design team, cities, developers and landowners, GB applied development oriented transit (DOT) principles to the entire 119 mile $4.7 Billion FasTracks system. Week long interactive design charrettes were held for each corridor. Station designs were modified and station locations were shifted to enable the creation of transit-oriented communities around FasTracks 53 stations. GB’s work with DOT has reshaped major transit projects across the United States now in operation or with detailed designs for Portland, Los Angeles, Phoenix, Minneapolis, Baltimore, Honolulu and Ft Lauderdale.",
          imagepath: "images/West_0006-min.jpg",
          imagecredit: false,
          key: 8
        },
        target: {
          title: "Target Field",
          titlelong: "The New Target Field Station Minneapolis",
          content:
            "Understanding the intersection of making transit work and place making can lead to critical design breakthroughs. In Minneapolis, GB led urban design workshops that resulted in changing the project design to realign the tracks to open the station up to the neighborhood, activate the public realm and to help the station spur growth in the North Loop. The $85m sweeping multi-level Target Field Station opened in 2014 and includes a park, jumbo screen, retail stores, a public plaza and a major development parcel as part of the rail hub next to Target Field.",
          imagepath: "images/InterchangeMay2014-min.jpg",
          imagecredit: false,
          key: 9
        },
        westside: {
          title: "Westside Subway",
          titlelong: "Westside Subway Los Angeles",
          content:
            'Los Angeles’s top transit priority, the "subway to the sea", has been an enduring dream for decades. GB helped to shape the project’s design and defined a multi-year path for Metro and the cities of Los Angeles and Beverly Hills to capture the land use benefits of this multi-billion dollar investment. Scenario testing helped to frame TOD planning. GB prepared a station urban design report, recommendations on station locations and portal placement, assessed local plans and policies for transit-friendliness, and developed a TOD program for the corridor. GB also oversaw the preparation of land use and economic development New Starts templates that contributed to the project getting a high rating from the federal government and receiving a Full Funding Grant Agreement in 2014.',
          imagepath: "images/BeachSunSetdabs171a_edited-1-min.jpg",
          imagecredit: false,
          key: 10
        }
      },
      slides: [
        {
          image: "images/NewLynnNewZealandweb-min.jpg",
          caption:
            '"the world’s foremost authority on TOD policy, design and implementation."',
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
img.cropped {
  border: 0px;
  width: 100%;
  filter: brightness(80%) grayscale(70%);
  margin-top: 0px;
  padding-bottom: 0px;
  &:hover {
    filter: grayscale(0%) brightness(100%);
    cursor: pointer;
  }
}
img.cropped.selected {
  filter: grayscale(0%) brightness(100%);
  cursor: pointer;
}
.projects {
  width: 33.333%;
  display: inline-block;
  // position: relative;
}
.projects-holder {
  width: 100vw;
  margin-bottom: 100px;
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
</style>
