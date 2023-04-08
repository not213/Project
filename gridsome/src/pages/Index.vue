<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16" style="background-color: #64179c; background-image: linear-gradient(to right, #64179c , #e1a9fc);">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">โครงการอนุรักษ์พันธุพืชอันเนื่องมาจากพระราชดำริ</div>
        <div class="text-green-700 leading-tight">สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/bg.png" alt="hero" style="width: 500px;"  />
      </div>
    </div> <!-- end hero -->
    <div class="mt-8 ml-auto mr-auto" style="width: 65%; position: center;">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="500"
        img-height="100"
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ สมเด็จพระเทพรัตนราชสุดา ฯ สยามบรมราชกุมารี งานฐานทรัพยากรท้องถิ่นหมายถึง การสำรวจและรวบรวมข้อมูลพื้นฐานของท้องถิ่น การประกอบอาชีพในท้องถิ่น ลักษณะทางกายภาพของท้องถิ่น ประวัติหมู่บ้าน ชุมชน วิถีชุมชน การใช้ประโยชน์ของ พืช สัตว์ ชีวภาพอื่น ๆ ข้อมูลภูมิปัญญาท้องถิ่น แหล่งทรัพยากรโบราณคดีเพื่อสร้างระบบการจัดเก็บและประมวลผล<a href="http://www.thakham.go.th/gallery/detail/19565">เว็บอบต.ท่าข้าม</a></p>

      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/2016-09_1e4bb5f2087d1c5.jpg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/2016-09_5ebcc3deb2bdf15.jpg" alt="mobile" />
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6" id="projects">การเก็บข้อมูลโครงการอพ.สธ</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <ul class="text-lg sm:text-xl">
          <li class="checkmark mb-6">
            <div>พืช</div>
            <div class="text-lg text-gray-600">เป็นการเก็บข้อมูลพืชในอบต.ท่าข้าม</div>
          </li>
          <li class="checkmark mb-6">
            <div>สัตว์</div>
            <div class="text-lg text-gray-600">เป็นการเก็บข้อมูลสัตว์ในอบต.ท่าข้าม</div>
          </li>
          <li class="checkmark mb-6">
            <div>ภูมิปัญญา</div>
            <div class="text-lg text-gray-600">เป็นการเก็บข้อมูลภูมิปัญญาในอบต.ท่าข้าม</div>
          </li>
          <li class="checkmark mb-6">
            <div>ชีวภาพอื่นๆ</div>
            <div class="text-lg text-gray-600">เป็นการเก็บข้อมูลชีวภาพอื่นๆในอบต.ท่าข้าม</div>
          </li>

        </ul>
      </div> <!-- end projects -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">คริปแนะนำ</h2>

       <div>
  <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/auwKId-0GZ4"
    allowfullscreen
  ></b-embed>
</div>

      </div> <!-- end get-to-know me -->
    </div>


  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
  }
}
</script>

