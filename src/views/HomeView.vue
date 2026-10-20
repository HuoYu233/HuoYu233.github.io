<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { awards } from '@/data/awards'
import { experiences } from '@/data/experiences'
import { publications } from '@/data/publications'
import { projects } from '@/data/projects'

const { locale } = useI18n()
const undergraduateAwards = awards.filter((award) => award.category === 'undergraduate')
const highSchoolAwards = awards.filter((award) => award.category === 'highSchool')
</script>

<template>
  <v-row id="card-overview" class="mt-4" justify="center">
    <v-col cols="6" md="3" align-self="center">
      <v-row justify="center">
        <div style="width: 80%">
          <v-img src="/photo.jpg" class="d-none d-md-block"></v-img>
        </div>
        <v-avatar size="150" class="d-md-none">
          <v-img src="/photo.jpg"></v-img>
        </v-avatar>
      </v-row>
    </v-col>
    <v-col cols="12" md="9" align-self="center">
      <v-card variant="text">
        <v-card-item>
          <v-card-title class="pb-2 pt-2">
            <h2 style="text-align: center">Zheng Luo | 罗铮</h2>
          </v-card-title>
          <v-card-text class="mt-4">
            <p style="margin-top: 14px" v-html="$t('home.bio')"></p>
            <div class="mt-6" style="text-align: center">
              {{ $t('home.email') }}: <a href="mailto:alanluo233@gmail.com">alanluo233@gmail.com</a> /
              <a href="https://github.com/HuoYu233" target="_blank">GitHub</a>
            </div>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>

  <v-divider class="mt-10 mb-4"></v-divider>

  <v-card id="card-experience" variant="text" class="mt-4">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.experience') }}</h2>
      </v-card-title>
      <v-card-item>
        <v-row v-for="experience in experiences" :key="experience.title.en" class="mt-4">
          <v-col cols="12" md="3" class="d-flex align-center justify-center">
            <v-img :src="experience.img_path" style="max-width: 280px"></v-img>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="9">
            <a
              v-if="experience.link[locale] || experience.link.en"
              :href="experience.link[locale] || experience.link.en"
              target="_blank"
              style="font-size: 24px; color: #111"
              v-html="experience.title[locale] || experience.title.en"
            ></a>
            <span
              v-else
              style="font-size: 24px; color: #111"
              v-html="experience.title[locale] || experience.title.en"
            ></span>
            <p style="font-size: 14px; color: #555; margin-top: 5px" v-html="experience.time[locale] || experience.time.en"></p>
            <p
              v-if="experience.description[locale] || experience.description.en"
              style="font-size: 16px; color: #555; margin-top: 5px"
              v-html="experience.description[locale] || experience.description.en"
            ></p>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card-item>
  </v-card>

  <v-card id="card-publications" variant="text" class="mt-4">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.publications') }}</h2>
      </v-card-title>
      <v-card-item>
        <v-row v-for="publication in publications" :key="publication.title" class="mt-4">
          <v-col cols="12" md="3">
            <v-img :src="publication.img_path" style="max-width: 280px; margin-top: 10px"></v-img>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="9">
            <a :href="publication.link" target="_blank" v-html="publication.title" style="font-size: 17px"></a>
            <p v-html="publication.authors" style="font-size: 14px"></p>
            <p v-html="publication.description[locale] || publication.description.en" style="font-size: 14px; color: #999; margin-top: 5px"></p>
            <p v-html="publication.time" style="font-size: 14px; color: #999; margin-top: 5px"></p>
            <p v-html="publication.submit_status[locale] || publication.submit_status.en" style="font-size: 14px; color: #555; margin-top: 5px"></p>
          </v-col>
        </v-row>
        <p v-if="publications.length" style="color: #888; font-size: 14px; margin-top: 20px">{{ $t('sections.equalContribution') }}</p>
      </v-card-item>
    </v-card-item>
  </v-card>

  <v-card id="card-awards" variant="text" class="mt-4">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.awards') }}</h2>
      </v-card-title>
      <v-card-text class="mt-3">
        <h3 class="mt-3">{{ $t('sections.undergraduate') }}</h3>
        <v-list>
          <v-list-item v-for="award in undergraduateAwards" :key="award.date + award.name.en" class="mt-1">
            <template #prepend>
              <v-icon icon="mdi-circle" size="10"></v-icon>
            </template>
            <v-list-item-title class="text-wrap">
              <h3 style="font-size: 17px">[{{ award.date }}] <span v-html="award.name[locale] || award.name.en"></span></h3>
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <h3 class="mt-5">{{ $t('sections.highSchool') }}</h3>
        <v-list>
          <v-list-item v-for="award in highSchoolAwards" :key="award.date + award.name.en" class="mt-1">
            <template #prepend>
              <v-icon icon="mdi-circle" size="10"></v-icon>
            </template>
            <v-list-item-title class="text-wrap">
              <h3 style="font-size: 17px">[{{ award.date }}] <span v-html="award.name[locale] || award.name.en"></span></h3>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card-item>
  </v-card>

  <v-card id="card-projects" variant="text" class="mt-2">
    <v-card-item>
      <v-card-title>
        <h2 class="card-title">{{ $t('sections.projects') }}</h2>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-row v-for="project in projects" :key="project.name.en" class="mt-1">
          <v-col>
            <p><a :href="project.link" target="_blank" v-html="project.name[locale] || project.name.en" style="font-size: 17px"></a></p>
            <p v-html="project.description[locale] || project.description.en" style="font-size: 14px; color: #999; margin-top: 2px"></p>
            <p v-html="project.time" style="font-size: 14px; color: #999; margin-top: 2px"></p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card-item>
  </v-card>

  <v-divider class="mt-10"></v-divider>
  <v-row class="mt-1" justify="center">
    <v-col align-self="center">
      <p style="text-align: center; font-size: 12px; color: #aaa; line-height: 1.5">
        <span v-html="$t('footer.builtWith')"></span><br />
        <span v-html="$t('footer.sourceCode')"></span>
      </p>
    </v-col>
  </v-row>
</template>
