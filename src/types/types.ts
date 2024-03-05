export type FeedBackT = {
    "id": string,
    "fullName": string,
    "imageSrc": string,
    "message": string,
    "rating": number,
    "createdAt": string,
}

export type reviewItem = {
    'message': string,
    'rating': number
}

export type FeedBackListProps = {
    list: FeedBackT[],
    all: boolean,
  }

export type FeedBackItemProps = {
    item: FeedBackT;
}
export type FeedBackFormProp = {
    openModal: boolean,
}
export type IContent = {
    collapsed: boolean;
    setCollapsed?: (collapsed: boolean) => void;
}