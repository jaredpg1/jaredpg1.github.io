<template>
  <base-section
    id="meet-our-crew"
    class="text-center"
  >
    <base-heading>Meet Our Team</base-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          md="4"
        >
          <v-avatar
            class="mb-6"
            color="white"
            size="196"
          >
            <v-img :src="item.src" />
          </v-avatar>

          <base-subheading v-text="item.name" />

          <div
            class="caption font-weight-light mb-6 text-uppercase"
            v-text="item.position"
          />

          <base-text>
            <v-responsive
              :cite="item.citeLink"
              class="mx-auto"
              max-width="350"
              tag="blockquote"
            >
              <v-responsive
                min-height="100"
                v-text="item.text"
              />
            </v-responsive>
          </base-text>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'AboutCrew',

    data: () => ({
      items: [
        {
          src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Squint&eyebrowType=SadConcernedNatural&mouthType=Concerned&skinColor=Pale',
          name: 'Kael Watts-Deuchar',
          position: 'Core Developer',
          text: 'We long for things that harm us and run from the things that grow and heal us. We think good is bad and bad is good.',
        },
        {
          src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=Black&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Tongue&skinColor=Pale',
          name: 'Albert Kaaman',
          position: 'Core Developer',
          text: 'It was unfair that people who longed for love the most, searched the hardest for it, found it so elusive.',
        },
        {
          src: 'https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Transparent&clotheColor=Red&clotheType=ShirtCrewNeck&eyeType=EyeRoll&eyebrowType=AngryNatural&facialHairType=Blank&mouthType=Concerned&skinColor=Yellow&topType=ShortHairShortRound',
          name: 'Jacek Karczmarczyk',
          position: 'Core Developer',
          text: 'Sometimes I wonder, that one missing sock after doing laundry, is the smart one. After being unhappy for so long, it finally walks away from a frayed, worn-out relationship.',
        },
        {
          src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Dizzy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
          name: 'Andrew Henry',
          position: 'Core Developer',
          // eslint-disable-next-line quotes
          text: `No matter how short or long your journey to your accomplishment is, if you don't begin you can't get there. Beginning is difficult, but unavoidable!`,
        },
        {
          src: 'https://avataaars.io/?accessoriesType=Blank&avatarStyle=Transparent&clotheColor=Heather&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&facialHairType=Blank&graphicType=Bear&hairColor=BrownDark&mouthType=Smile&skinColor=Pale&topType=ShortHairShortFlat',
          name: 'Dmitry Sharshakov',
          position: 'Core Developer',
          text: 'If you’re waiting for a path to emerge magically before you actively start building your dream, you’re going to be waiting for an awfully long time.',
        },
        {
          src: 'https://avataaars.io/?avatarStyle=Transparent&clotheColor=Heather&clotheType=ShirtCrewNeck&eyeType=Default&eyebrowType=Default&facialHairColor=Black&facialHairType=Blank&hairColor=Blonde&mouthType=Default&skinColor=Pale&topType=ShortHairShortRound',
          name: 'Brandon Deo',
          position: 'Community Manager',
          text: 'If we forgave for as long as we hold grudges, the world would be a healthier and happier place.',
        },
      ],
    }),
  }
</script>
