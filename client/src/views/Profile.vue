<template>
  <div>
    <v-card flat>
      <v-toolbar color="light-blue darken-2">
        <v-tabs v-model="tab" background-color="light-blue darken-2" centered grow dark slider-color="primary">
  
          <v-tabs-slider></v-tabs-slider>
  
          <v-tab href="#tab-1">
            Description
            <v-icon class="mx-3">mdi-account-badge-horizontal</v-icon>
          </v-tab>
  
          <v-tab href="#tab-2">
            Posts
            <v-icon class="mx-3">mdi-account-post</v-icon>
          </v-tab>
  
          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-1">
              <v-card class="scroll2">
                <v-row class="text-center">
                  <v-col cols="12">
                  
                   <v-avatar  color="green" size="256">
                                            <img src="../assets/logo.png">
                                        </v-avatar>
                  
                  <v-col cols="12">
                    <v-text class="pt-12 display-3">João Leal</v-text>
                    <br>
                    <v-text class="font-italic subtitle-1 font-weight-light">Mestrado Integrado em Engenharia Informática</v-text>
                  </v-col>

                  <v-divider class="pt-6 mx-12"></v-divider>
                  </v-col>

                  <v-col cols="12">
                    <v-text class="body-1 pa-12"> Sunt elit ut elit sunt culpa ad exercitation amet. Aliqua occaecat laborum magna magna consectetur ullamco laborum. Sint excepteur nostrud est dolore eu reprehenderit Lorem non irure dolore commodo minim commodo. Laborum dolor sint nisi qui laborum. Minim minim aliqua duis adipisicing sunt exercitation sit.

Ullamco duis aute excepteur aliquip ea. Enim sit Lorem tempor pariatur anim do qui sint tempor eu. Qui eu amet qui aute adipisicing sit. Et ipsum fugiat nostrud velit anim.

Nostrud non ea magna aliqua culpa anim id duis. Eu minim culpa et est aliquip velit incididunt consequat commodo ullamco ut magna dolor. Consectetur et cupidatat adipisicing eu deserunt cupidatat laboris proident aute pariatur id Lorem labore. Exercitation veniam duis dolor sunt laborum quis esse sunt aliqua nulla deserunt consequat in.

Aliquip adipisicing exercitation ea ad nulla est sint anim eiusmod sint. Ea proident consectetur nulla eiusmod aute reprehenderit elit. Nostrud occaecat ipsum laboris commodo qui. Anim esse est irure adipisicing ad voluptate commodo ex commodo laboris esse officia deserunt reprehenderit. Cillum deserunt eiusmod quis ad qui mollit adipisicing elit ad non. Sint ipsum in tempor adipisicing mollit laboris ullamco. Aliquip velit do deserunt sint elit eiusmod ipsum consectetur.

Excepteur deserunt anim deserunt occaecat consequat deserunt tempor amet nulla ipsum veniam do reprehenderit. Aute incididunt ea culpa excepteur tempor. Ut deserunt eiusmod minim dolor esse.

Est qui est aute tempor non nostrud veniam officia. Velit proident consequat irure dolore fugiat ullamco ut labore ut. Lorem do reprehenderit culpa culpa laboris est sunt eu eiusmod sint nulla. Proident culpa aliquip aliquip excepteur nisi labore cupidatat proident exercitation. Dolor eiusmod voluptate consequat commodo aliqua aute.

Lorem consectetur ea esse qui anim quis labore irure nulla fugiat Lorem cupidatat ad. Consequat consequat do nulla nisi minim laboris. Culpa ea exercitation proident aliquip commodo elit esse ad excepteur veniam et. Do occaecat sit pariatur sit elit deserunt sint aliqua minim pariatur sint dolore sit pariatur. In sunt aute Lorem Lorem aute elit Lorem ex adipisicing. Sit excepteur quis nisi pariatur veniam eiusmod exercitation enim culpa quis aute irure labore commodo.

Commodo commodo velit officia magna reprehenderit deserunt quis laborum. Minim dolore officia est ad non est in. Fugiat eu et do et in. Irure ex esse sit ea qui. Deserunt exercitation sunt excepteur cillum cupidatat qui irure quis id ex culpa sunt cupidatat voluptate. Amet eiusmod id cupidatat labore nisi pariatur.

Sint ea pariatur irure irure occaecat officia magna nostrud amet nostrud qui sint mollit duis. Ex dolor culpa do nisi cillum. Laboris culpa commodo voluptate et ad ut culpa et consequat.

Nostrud et sunt eu adipisicing esse. Ut eiusmod sit ad commodo irure duis aliqua nostrud ut eu elit. Minim dolore officia ea non ea. Tempor consequat irure quis fugiat. Adipisicing eiusmod culpa ea consequat eiusmod minim cillum. Pariatur aliqua fugiat tempor ut.</v-text>
                  </v-col>
                  
              
                </v-row>
              </v-card>
            </v-tab-item>
  
            <v-tab-item value="tab-2">
              <v-card class="scroll2 mb-n12">
                <Post/>
              </v-card>
            </v-tab-item>
  
          </v-tabs-items>
        </v-tabs>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
  import Post from '@/components/Post'
  
  export default {
    components: {
      Post
    },
    data() {
      return {
        tab: null
      }
    }
  }
</script>