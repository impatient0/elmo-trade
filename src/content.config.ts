import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    pageID: z.string(),
    services: z.array(z.string()),
    info: z.object({
      cover_image: z.tuple([z.string(), z.number(), z.number(), z.number(), z.number()]),
      slide_image: z.tuple([z.string(), z.number(), z.number(), z.number(), z.number()]),
      year: z.array(z.string()),
      address: z.string(),
      description: z.string(),
    }),

    sections: z.array(z.object({
        about: z.object({
            header: z.string(),
            body: z.string(),
        }),
        multi_gallery: z.array(z.object({
            title: z.string(),
            images: z.array(z.string()),
        })),
        shifts: z.record(z.string(), z.number()).optional(),
    })).optional(),

    about: z.object({
        header: z.string(),
        body: z.string(),
    }).optional(),

    multi_gallery: z.array(z.object({
        title: z.string(),
        images: z.array(z.string()),
    })).optional(),
  }),
});


const servicesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    pageID: z.string(),
    carousel: z.object({
      images: z.array(z.object({
        image: z.tuple([z.string(), z.number(), z.number(), z.number(), z.number()]),
        description: z.object({
          title: z.string(),
          headline: z.string(),
          subbody: z.string(),
          body: z.string(),
        }),
      })),
    }),
    about: z.object({
      header: z.string(),
      body: z.string(),
    }),
    multi_gallery: z.array(z.object({
      title: z.string(),
      images: z.array(z.string()),
    })),
    project_carousel: z.array(z.object({
      image: z.tuple([z.string(), z.number(), z.number(), z.number(), z.number()]),
      title: z.string(),
      year: z.array(z.string()),
      link: z.string(),
      address: z.string(),
      info: z.string(),
    })),
  }),
});

export const collections = {
  projects: projectsCollection,
  services: servicesCollection,
};