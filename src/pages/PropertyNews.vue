<template>
  <div class="p-3">
    <div class="flex text-[#E67E23] mb-2">
      <div class="flex w-[16%] text-lg font-semibold pl-3">
        Search Filter <FunnelIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div class="flex w-[56%] text-lg font-semibold pl-5">
        Blog <NewspaperIcon class="h-[26px] w-[26px] ml-1" />
      </div>
      <div class="flex w-[28%] text-lg font-semibold pl-5">
        All <mdicon class="ml-2" name="post-outline" :width="26" :height="26" />
      </div>
    </div>
    <div class="flex">
      <div class="w-[16%]">
        <div class="h-[700px] flex-col overflow-auto">
          <Accordion
            title="Property Type"
            :content="[
              { type: 'radio', data: 'Buy' },
              { type: 'radio', data: 'rent' },
            ]"
          />
          <Accordion
            title="Property Category"
            :content="[
              { type: 'checkbox', data: 'Commercial' },
              { type: 'checkbox', data: 'Condo' },
              { type: 'checkbox', data: 'House' },
              { type: 'checkbox', data: 'Land' },
              { type: 'checkbox', data: 'Townhouse' },
            ]"
          />
          <Accordion
            title="Location"
            :content="[
              { type: 'text', data: 'City' },
              { type: 'text', data: 'Address' },
              { type: 'text', data: 'Neighborhood' },
              { type: 'text', data: 'Zipcode' },
              { type: 'dialog', data: 'Philippines' },
              { type: 'dialog', data: 'Cebu' },
            ]"
          />
          <Accordion
            title="Price"
            :content="[
              { type: 'text', data: '₱ _ _ _ _ _ _ _ _ _ _ _ _ ' },
              { type: 'range', data: 'Cebu' },
            ]"
          />
          <Accordion
            title="Area"
            :content="[
              { type: 'text', data: 'Square Meter ' },
              { type: 'range', data: 'Cebu' },
            ]"
          />
          <Accordion
            title="Rooms"
            :content="[
              { type: 'spinner', data: 'Bedroom' },
              { type: 'spinner', data: 'Bathroom' },
            ]"
          />
        </div>
      </div>
      <BlogDetails
        title="Be a Homeowner at Woodway Townhomes 2 and enjoy the benefits and
                amenities we got to offer"
        location="Location: Brgy. Pooc, Talisay City"
        developer="Developed by: Brickland Property
                Venture Corp."
        housedetails="(Single Attached- Mirror
                Design) Details Floor Area: 123 sq.m. +/- Lot Area: 92-101 sq.m."
        amenities="
⭐4 bedrooms 
⭐3 toilet & bath 
⭐living area/ dining area
⭐kitchen area (with soft close kitchen cabinets with overhead)
⭐provision for extra storage room under stairs 
⭐balcony 
⭐w/covered car park 
⭐ service area with own laundry tub 

✔high quality w/ beautifully designed finishes 
✔ high ceiling with big windows 
✔ all LED lights 
✔ concrete wall partitions 
✔provision for spacious garden 
✔Upscale private subdivision along Brgy road
✔24 hr security w/gated perimeter fence 
✔clubhouse amenities
✔parks & playground 
✔basketball court 
✔flood free zone 
✔low density community FEW UNITS LEFT! BEST INVESTMENT TO MAKE! 
  what are you waiting for?"
        name="Mrs. Marivil Du"
        contact=" ☎️09773824416 (Globe) 
  ☎️ 254-1640(Landline) 
               "
        email="marivildu75@gmail.com"
        tags="#houseandlotforsaleincebu
                #houseandlotforsaleintalisaycitycebu #woodwaytownhomes2
                #realestate #BestInvestment #propertyinvesting #megalandrealty
                #cebuanarealestatebroker #ceburealestatebroker
                #realestatebrokerphilippines"
      />

      <div class="w-[28%] mr-6">
        <div
          class="w-full h-[475px] overflow-auto bg-white border-2 rounded-md shadow-xl p-5 ml-5 mb-5"
        >
          <Blog
            youtubeUrl="https://www.youtube.com/watch?v=2v741kHvzbY"
            thumbnailUrl="../assets/images/Youtube-Images/image1.png"
            description="3 LEVEL HOUSE WITH ROOF DECK AND POOL IN VISTA GRANDE TALISAY CEBU PHILIPPINES"
            name="Marivil Du"
          />
          <Blog
            youtubeUrl="https://www.youtube.com/watch?v=2v741kHvzbY"
            thumbnailUrl="../assets/images/Youtube-Images/image1.png"
            description="Biggest 5 Star Beach Resort in Panglao Bohol Hennan Resort Alona, Man Made Forest, Baclayon Church"
            name="Marivil Du"
          />
          <Blog
            youtubeUrl="https://www.youtube.com/watch?v=2v741kHvzbY"
            thumbnailUrl="../assets/images/Youtube-Images/image1.png"
            description="FOREIGNERS CAN OWN THIS HOUSE & LOT l CONDOMINIUM TITLE l CITY HOMES MINGLANILLA CEBU PHILIPPINES"
            name="Marivil Du"
          />
          <Blog
            youtubeUrl="https://www.youtube.com/watch?v=2v741kHvzbY"
            thumbnailUrl="../assets/images/Youtube-Images/image1.png"
            description="REAL ESTATE BROKER IN CEBU l CONDO FOR RENT l MARIVIL DU"
            name="Marivil Du"
          />
          <Blog
            youtubeUrl="https://www.youtube.com/watch?v=2v741kHvzbY"
            thumbnailUrl="../assets/images/Youtube-Images/image1.png"
            description="REAL ESTATE BROKER IN CEBU 1 CONDO FOR RENT l MARIVIL DU"
            name="Marivil Du"
          />
          <Blog
            youtubeUrl="https://www.youtube.com/watch?v=2v741kHvzbY"
            thumbnailUrl="../assets/images/Youtube-Images/image1.png"
            description="3 LEVEL HOUSE WITH ROOF DECK AND POOL IN VISTA GRANDE TALISAY CEBU PHILIPPINES"
            name="Marivil Du"
          />
          <Blog
            youtubeUrl="https://www.youtube.com/watch?v=2v741kHvzbY"
            thumbnailUrl="../assets/images/Youtube-Images/image1.png"
            description="REAL ESTATE BROKER IN CEBU 1 CONDO FOR RENT l MARIVIL DU"
            name="Marivil Du"
          />
          <Blog
            youtubeUrl="https://www.youtube.com/watch?v=2v741kHvzbY"
            thumbnailUrl="../assets/images/Youtube-Images/image1.png"
            description="REAL ESTATE BROKER IN CEBU l CONDO FOR RENT l MARIVIL DU"
            name="Marivil Du"
          />
          <Blog
            youtubeUrl="https://www.youtube.com/watch?v=2v741kHvzbY"
            thumbnailUrl="../assets/images/Youtube-Images/image1.png"
            description="REAL ESTATE BROKER IN CEBU l CONDO FOR RENT l MARIVIL DU"
            name="Marivil Du"
          />
        </div>
        <div class="flex w-full text-[#E67E23] ml-3 mb-2">
          <div class="flex text-lg font-semibold pl-3">
            Comments:
            <ChatBubbleLeftIcon class="h-[26px] w-[26px] ml-1 text-[#E67E23]" />
          </div>
        </div>
        <div>
          <div
            class="flex w-full overflow-auto bg-white border-2 rounded-md shadow-xl p-3 ml-5 mb-6 cursor-pointer hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)]"
          >
            <div class="flex ml-2 w-full">
              <input
                type="text"
                placeholder="Leave a comment..."
                class="w-full border-b-2 pl-2 p3-1 focus:outline-none"
              />
              <a href=""
                ><PaperAirplaneIcon
                  class="ml-1 mr-1 w-[25px] h-[25px] text-[#E67E23] hover:scale-110"
              /></a>
            </div>
          </div>

          <!-- comments -->
          <Comment
            name="@Mikilabsyu143"
            description="I held her close to me
'Cause I know she breaks so easily
And then I told her."
          />
          <Comment
            name="@Mikilabsyu143"
            description="But I knew no matter how I tried to console her
She'd just do the best she could
But there are times the best is no damn good"
          />
          <Comment
            name="@Mikilabsyu143"
            description="And no matter how you try to be kind
There's always still a part of you you leave behind
When it falls apart
There's no easy way to break somebody's heart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "../components/Accordion.vue";
import {
  FunnelIcon,
  NewspaperIcon,
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/outline";
import Blog from "../components/Blog.vue";
import Comment from "../components/Comment.vue";
import BlogDetails from "../components/BlogDetails.vue";
</script>

<style>
/* Comment Send Button with Orange Scheme */
.comment-button {
  background-color: #ff6600; /* Orange background color */
  color: #fff; /* Text color (white) */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

/* Hover state for the button */
.comment-button:hover {
  background-color: #e65200; /* Darker orange on hover */
}
</style>
