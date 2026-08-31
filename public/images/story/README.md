# The story photographs

Six photographs, one for each chapter of `/story`. All six are currently
openly-licensed pictures of the cities, standing in until her own arrive.

## Where they go

Save them straight into this folder:

```
public/images/story/
```

## More than one per chapter

A chapter can carry as many photographs as there are. The first one leads at
full size; the rest are set smaller and pulled up beneath its left edge, as a
second look at the same place rather than a gallery.

Wolaita Sodo and the runway chapter each carry two today. If you have a second
picture for any of the others, send it with a name like `rome-2.jpg` and say
which order they should run in.

## What to call them

**Keep the existing names and overwrite the file.** Nothing else has to be
renamed, and the site picks the new picture up on the next build.

| Save it as | Chapter | Heading on the page | What the chapter is about |
| --- | --- | --- | --- |
| `sodo-statue.jpg`, `sodo.jpg` | 1 | Wolaita Sodo | Where it begins |
| `nairobi.jpg` | 2 | Nairobi | Leaving |
| `kampala.jpg` | 3 | Kampala | In transit |
| `rome.jpg` | 4 | Rome | A second home |
| `stages.jpg`, `paris.jpg` | 5 | Milan &middot; London &middot; Paris | The stages |
| `addis.jpg` | 6 | Addis Ababa | The return |

Two of these also carry cards on the home page: the **lead** photograph of
Wolaita Sodo on the story card, and `addis.jpg` on the peace card. That happens
automatically &mdash; the home page reads the same record, so there is no second
place to update and no way for the credit to fall out of step. Reordering a
chapter's photographs therefore changes the home card too.

## What each photograph should be

- **Landscape** crops sit best in the chapter frame.
- **A photograph of her in that place beats a photograph of the place.** If
  there is one of her in Nairobi, use it; the skyline is only the fallback.
- **JPG**, at least **2000px on the long edge**, quality about 80.
- One file per chapter. Every other size is generated automatically.

## Tell me two things per photograph

Dropping the file in is not quite enough &mdash; three fields in
`content/story.ts` still describe the old picture:

1. **Who took it.** This is the one that matters. `credit` currently names the
   Wikimedia photographer of the stand-in, and a wrong photographer credit on
   her own site is worse than no photograph. `Personal archive` is a perfectly
   good answer for a family or phone photograph.
2. **What is in the frame,** in a few words, so the `alt` text describes the
   real picture for anyone using a screen reader. The current alt text says
   &ldquo;placeholder image&rdquo; and has to go.

I will also update `width` and `height` to the file's real pixel size &mdash;
if those stay wrong the picture is stretched or the layout jumps while it
loads &mdash; and add a row for each file to
[`RIGHTS.md`](../../../RIGHTS.md).

## If a photograph cannot be cleared

Say so and that chapter keeps its marked stand-in. Publishing a photograph
whose rights are unclear on her own website is the one outcome worth avoiding;
an obvious placeholder is not.
