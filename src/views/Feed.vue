<template>
  <div class="feed">
    <h1 class="feed__title">Feed list</h1>
    <ul class="feed__list">
      <li
        class="feed__list__item"
        :key="feed.url"
        v-for="feed in feeds"
        @click="openViewer(feed)"
      >
        {{ feed.url }}
      </li>
    </ul>
    <div class="feed__form">
      <input type="text" class="feed__form__link" v-model="inputFeed" />
      <button class="feed__form__submit" @click="addFeed">Submit</button>
    </div>
    <div
      class="feed__close-viewer"
      :class="{ 'feed__close-viewer--active': activeFeed !== null }"
      @click="closeViewer"
    >
      x
    </div>
    <iframe
      ref="viewer"
      class="feed__viewer"
      :class="{ 'feed__viewer--active': activeFeed !== null }"
      @dblclick="closeViewer"
    ></iframe>
    <link
      rel="prerender"
      :key="feed.url"
      v-for="feed in feeds"
      :url="feed.url"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Feed } from "../@types";

@Component({})
export default class Test extends Vue {
  feeds: Feed[] = [
    { url: "https://css-tricks.com/building-a-rss-viewer-with-vue-part-1/" },
    {
      url:
        "https://www.journaldugeek.com/2019/07/08/sony-travaille-aussi-sur-un-smartphone-pliable-et-des-caracteristiques-ont-fuite/"
    },
    {
      url:
        "https://www.awwwards.com/the-wandering-designer-the-state-of-ux-design-in-chile.html"
    },
    {
      url:
        "https://www.sitepoint.com/sitepoint-premium-new-releases-modern-javascript-kanban-devtools/?utm_source=rss"
    },
    {
      url:
        "https://www.lequipe.fr/Adrenaline/Ultra-trail/Actualites/Le-film-du-marathon-du-mont-blanc-2019/1038037#xtor=RSS-1"
    },
    {
      url:
        "https://dev.to/maxime1992/manage-your-dev-to-blog-posts-from-a-git-repo-and-use-continuous-deployment-to-auto-publish-update-them-143j"
    }
  ];
  inputFeed: string = "";
  activeFeed: Feed | null = null;

  get viewerContainer() {
    if (this.$refs.viewer !== null) {
      const viewerWindow = (<HTMLIFrameElement>this.$refs.viewer).contentWindow;
      if (viewerWindow !== null) {
        return viewerWindow.document;
      }
    }
    return null;
  }

  created(): void {}

  addFeed(): void {
    if (
      this.inputFeed != "" &&
      this.feeds.findIndex(f => f.url === this.inputFeed) === -1
    ) {
      this.feeds.push({ url: this.inputFeed });
    }
    this.inputFeed = "";
  }

  openViewer(feed: Feed): void {
    this.activeFeed = feed;

    fetch(`/.netlify/functions/render?url=${this.activeFeed.url}`)
      .then(response => response.text())
      .then(data => this.writeToViewer(data));
  }

  closeViewer(): void {
    this.activeFeed = null;
    this.writeToViewer();
  }

  test(): void {
    alert("test");
  }

  writeToViewer(data: string = ""): void {
    if (this.viewerContainer) {
      this.viewerContainer.open();
      this.viewerContainer.write(data);
      this.viewerContainer.close();
    }
  }
}
</script>
<style lang="scss" scoped>
.feed {
  &__list {
    margin: 0;
    padding: 0;

    &__item {
      margin: 10px 0;
      padding: 5px;
      cursor: pointer;
      font-size: 10px;
      background: #ddd;
    }
  }

  &__form {
    margin-top: 30px;
  }

  &__close-viewer {
    display: none;
    cursor: pointer;
    position: fixed;
    z-index: 2;
    top: 5px;
    right: 5px;
    padding: 5px;
    background: #42b983;
    box-shadow: 0 0 5px #fff, 0 0 10px #fff;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    &--active {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__viewer {
    display: none;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: #eee;

    &--active {
      display: block;
    }
  }
}
</style>
