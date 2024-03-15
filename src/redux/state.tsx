
type MessageType = {
    id: number,
    message: string
}
type DialogType = {
    id: number,
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type SidebarItemsType = {
    title: string
    link: string
}


export type ProfilePageType = {
    posts: Array<PostType>
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type SidebarType = {
    sidebarItems: Array<SidebarItemsType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


let state: RootStateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, my name is Slim Shaddy1', likesCount: 12},
            {id: 2, message: 'Hi, my name is Slim Shaddy2', likesCount: 12},
            {id: 3, message: 'Hi, my name is Slim Shaddy3', likesCount: 12},
            {id: 4, message: 'Hi, my name is Slim Shaddy4', likesCount: 12},
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'slava1'},
            {id: 2, name: 'slava2'},
            {id: 3, name: 'slava3'},
            {id: 4, name: 'slava4'},
            {id: 5, name: 'slava5'},
            {id: 6, name: 'slava6'},
        ],

        messages: [
            {id: 1, message: 'one'},
            {id: 2, message: 'two'},
            {id: 3, message: 'three'},
            {id: 4, message: 'four'},
            {id: 5, message: 'five'},
        ]
    },
    sidebar: {
        sidebarItems: [
            {title: 'Profile', link: '#profile'},
            {title: 'Messages', link: '#messages'},
            {title: 'News', link: '#news'},
            {title: 'Music', link: '#music'},
            {title: 'Settings', link: '#Settings'},
        ],
    }
}

export default state;