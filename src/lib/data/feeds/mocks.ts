import type { RssSource } from './types/source';
import { RssFolderEntryType, type RssFolder, type RssFolderEntry } from './types/folder';
import type { RssStory } from './types/story';

const id = () => crypto.randomUUID();

type RssSourceInput = Omit<RssSource, 'id' | 'createdDate'>;
type RssStoryInput = Omit<RssStory, 'id' | 'createdDate'>;

const createSource = (data: RssSourceInput): RssSource => {
  return { ...data, createdDate: new Date(), id: id() };
}

const createStory = (data: RssStoryInput): RssStory => {
  return { ...data, createdDate: new Date(), id: id() };
}

const createFolder = (data: Omit<RssFolder, 'id' | 'createdDate'>): RssFolder => {
  return { ...data, createdDate: new Date(), id: id() };
}

const createFolderSourceEntry = (data: RssSourceInput): RssFolderEntry => {
  return { type: RssFolderEntryType.Source, data: createSource(data) };
}

const createFolderStoryEntry = (data: RssStoryInput): RssFolderEntry => {
  return { type: RssFolderEntryType.Story, data: createStory(data) };
}

export const createFolders = (): RssFolder[] => {
  return [
    createFolder({
      title: 'Blogs',
      entries: [
        createFolderSourceEntry({
          title: 'Daring Fireball',
          feedUrl: 'https://daringfireball.net/feeds/main',
          webUrl: 'https://daringfireball.net/',
          icon: 'https://daringfireball.net/graphics/favicon.ico?v=005'
        }),
        createFolderSourceEntry({
          title: 'xkcd',
          feedUrl: 'https://xkcd.com/rss.xml',
          webUrl: 'https://xkcd.com',
          icon: 'https://xkcd.com/s/919f27.ico'
        })
      ]
    }),
    createFolder({
      title: 'Tech',
      entries: [
        createFolderSourceEntry({
          title: 'Coding Horror',
          feedUrl: 'https://blog.codinghorror.com/rss/',
          webUrl: 'https://blog.codinghorror.com',
          icon: 'https://blog.codinghorror.com/content/images/size/w256h256/2020/06/3cffc4b347c3587f19fe222caaac69f63b9a5e73.png',
        }),
        createFolderSourceEntry({
          title: 'Tech Crunch',
          feedUrl: 'https://techcrunch.com/feed/',
          webUrl: 'https://techcrunch.com/',
          icon: 'https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=192'
        }),
        createFolderSourceEntry({
          title: 'The Verge',
          feedUrl: 'https://www.theverge.com/rss/index.xml',
          webUrl: 'http://theverge.com',
          icon: 'https://www.theverge.com/icons/favicon.ico'
        })
      ],
      children: [
        createFolder({
          title: 'Android',
          entries: [
            createFolderSourceEntry({
              title: 'Android Studio Release Updates',
              feedUrl: 'https://androidstudio.googleblog.com/feeds/posts/default',
              webUrl: 'https://androidstudio.googleblog.com',
              icon: 'https://androidstudio.googleblog.com/favicon.ico'
            }),
          ]
        })
      ]
    })
  ]

}
