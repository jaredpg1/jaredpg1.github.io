<template>
  <base-section
    id="author"
    class="py-0"
  >
    <v-img
      :src="require('@/assets/md2.jpg')"
      gradient="to right bottom, rgb(0, 46, 79), rgba(0, 0, 0, .7)"
      min-height="30vh"
    >
      <v-container class="fill-height white--text">
        <v-row
          align="center"
          class="flex-column text-center"
          justify="center"
        >
          <base-heading>
            Author
          </base-heading>

          <div class="my-6" />

          <v-avatar
            class="mb-6 elevation-24"
            color="white"
            size="256"
          >
            <v-img
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
            />
          </v-avatar>

          <base-subheading>
            John Leider
          </base-subheading>

          <base-text>
            Founder
          </base-text>

          <v-col
            cols="auto"
            md="4"
          >
            <blockquote
              cite="https://www.goodreads.com/work/quotes/825414"
              class="subtitle-1 font-weight-light"
            >
              <p>
                In the sky there are always answers and explanations for everything: every pain, every suffering, joy and confusion.
              </p>

              <footer class="overline">
                <strong>—Ishmael</strong> Beah <cite>A Long Way Gone: Memoirs of a Boy Soldier</cite>
              </footer>
            </blockquote>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </base-section>
</template>

<script>
  export default {
    name: 'AboutAuthor',
  }
</script>
