export interface BestSeller {
  items: [
    {
      volumeInfo: {
        title: string,
        imageLinks: {
          thumbnail: string
        },
        description: string,
        authors: [string]
      }
    }
  ]
}
