<template>

  <div class="mt-24">

    <div class="mb-16 mt-20 w-5/6 lg:w-3/4 md:w-4/5 mx-auto px-4">
      <h2 class="font-montserrat font-medium text-4xl mb-10 text-slate-800 mt-20">Resume</h2>
    </div>


    <section class="timeline w-5/6 md:w-full lg:w-3/4  mx-auto ">
      <div class="">
        <div class="timeline-item mb-20" v-for="(event, index) in timeline" :key="event.event" :data-animate="index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'">
          <div class="timeline-img"></div>
          <div class="timeline-content w-5/12 ">
            <div class="title flex-row flex ">
              <div>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  {{ event.event }}
                </h3>
                <span class="block mb-2 text-sm font-normal leading-none text-gray-400 ">{{ event.location }} - {{ event.date }}</span>
              </div>
            </div>
            <p class="mb-4 text-base font-normal text-gray-500 ">
              <span v-html="event.description"></span>
            </p>
            <div class="flex flex-row flex-wrap">
              <img class="mr-[8px]"  v-for="image in event.images" :key="image.src" :class="image.class" :src="image.src" :alt="image.alt"/>
            </div>
          </div>
        </div>



      </div>
    </section>

    <div class="text-center mt-10 lg:block sm:hidden">
      <a class="relative inline-block group focus:outline-none focus:ring" :href="siteMetaData.linkedin" target="_blank">
        <span class="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                    Serious resume on LinkedIn
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import timeline from "~/data/timeline";
import siteMetaData from "~/data/siteMetaData";

export default {
  data() {
    return {
      siteMetaData : siteMetaData,
      timeline : timeline
    };
  },

  mounted() {
    const targets = document.querySelectorAll(".timeline-item");

    // Loop through each of the target
    targets.forEach(function(target) {
      // Hide the element
      // target.classList.add("opacity-0");


      // Callback for IntersectionObserver
      const callback = function(entries) {
        entries.forEach(entry => {

          const animationType = entry.target.dataset.animate;

          // Is the element in the viewport?
          if (entry.isIntersecting) {
            // Add the fadeIn class:
            entry.target.classList.add(animationType);
          } else {
            // Otherwise remove the fadein class
            entry.target.classList.remove(animationType);
          }
        });
      };

      // Set up a new observer
      const observer = new IntersectionObserver(callback);

      // Add the element to the watcher
      observer.observe(target);


    });

  }

};
</script>

<style lang="scss" scoped>
$primary: #3F51B5;
$dark-primary: #303F9F;
$light-primary: #C5CAE9;
$text: #FFFFFF;
$primary-text: #212121;
$secondary-text: #757575;
$accent: #FF4081;


.timeline {
  position: relative;

  .timeline-item {
    width: 100%;


    .timeline-content {
      position: relative;
      //width: 45%;
      padding: 10px 30px;
      border-radius: 4px;
      background: #fbfbfb;
      box-shadow: 0 20px 25px -15px rgba(0, 0, 0, .3);

      &::after {
        content: '';
        position: absolute;
        border-style: solid;
        width: 0;
        height: 0;
        top: 30px;
        right: -15px;
        border-width: 10px 0 10px 15px;
        border-color: transparent transparent transparent #f5f5f5;
      }
    }

    &:nth-child(even) {

      .timeline-content {
        float: right;

        &::after {
          content: '';
          position: absolute;
          border-style: solid;
          width: 0;
          height: 0;
          top: 30px;
          left: -15px;
          border-width: 10px 15px 10px 0;
          border-color: transparent #f5f5f5 transparent transparent;
        }
      }
    }

    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .timeline-img {
    width: 30px;
    height: 30px;
    background: $primary;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-top: 25px;
    margin-left: -15px;
  }


  .timeline-card {
    padding: 0!important;

    p {
      padding: 0 20px;
    }

    a {
      margin-left: 20px;
    }
  }

  // blue line between timeline items
  &::before {
    content: '';
    background: $light-primary;
    width: 5px;
    height: 95%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}


@media screen and (max-width: 768px) {

  .timeline {

    &::before {
      left: -25px;
      transform: translateX(-70%);
    }

    .timeline-img {
      left: -26px;
    }

    .timeline-content {
      max-width: 100%;
      width: 100%;
      margin-left: 10px;
    }

    .timeline-item {

      &:nth-child(even) {

        .timeline-content {
          float: none;

        }
      }

      &:nth-child(odd) {

        .timeline-content {

          &::after {
            content: '';
            position: absolute;
            border-style: solid;
            width: 0;
            height: 0;
            top: 30px;
            left: -15px;
            border-width: 10px 15px 10px 0;
            border-color: transparent #f5f5f5 transparent transparent;
          }
        }

      }
    }
  }

}


</style>
