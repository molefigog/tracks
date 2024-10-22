
export const AppMenus = {
    
	navbarTopRight: [],
	navbarTopLeft: [],
	navbarSideLeft: [
  {
    "path": "/home",
    "label": "Home",
    "icon": "fas fa-home",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/genres",
    "label": "Genres",
    "icon": "fas fa-tags",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/music",
    "label": "Music",
    "icon": "fas fa-compact-disc",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/users",
    "label": "Users",
    "icon": "fas fa-users-cog",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }
],
	genreslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Title",
    "align": "left",
    "sortable": false,
    "name": "title",
    "field": "title"
  },
  {
    "label": "Image",
    "align": "left",
    "sortable": false,
    "name": "image",
    "field": "image"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	musiclistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Artist",
    "align": "left",
    "sortable": false,
    "name": "artist",
    "field": "artist"
  },
  {
    "label": "Title",
    "align": "left",
    "sortable": false,
    "name": "title",
    "field": "title"
  },
  {
    "label": "Amount",
    "align": "left",
    "sortable": false,
    "name": "amount",
    "field": "amount"
  },
  {
    "label": "Image",
    "align": "left",
    "sortable": false,
    "name": "image",
    "field": "image"
  },
  {
    "label": "Publish",
    "align": "left",
    "sortable": false,
    "name": "publish",
    "field": "publish"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	free: [    
{value: "0", label: "free"},
	{value: "1", label: "paid"}
    ],
	beat: [    
{value: "0", label: "song"},
	{value: "1", label: "beat"}
    ],
	publish: [    
{value: "0", label: "draft"},
	{value: "1", label: "published"}
    ],
	userslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": "Avatar",
    "align": "left",
    "sortable": false,
    "name": "avatar",
    "field": "avatar"
  },
  {
    "label": "Facebook Id",
    "align": "left",
    "sortable": false,
    "name": "facebook_id",
    "field": "facebook_id"
  },
  {
    "label": "Otp Code",
    "align": "left",
    "sortable": false,
    "name": "otp_code",
    "field": "otp_code"
  },
  {
    "label": "Otp Date",
    "align": "left",
    "sortable": false,
    "name": "otp_date",
    "field": "otp_date"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],

    exportFormats: {
        print: {
			label: 'Print',
			color: 'blue',
            icon: 'fas fa-print',
            id: 'print',
            ext: 'print',
        },
        pdf: {
			label: 'Pdf',
			color: 'red',
            icon: 'fas fa-file-pdf',
            id: 'pdf',
            ext: 'pdf',
        },
        excel: {
			label: 'Excel',
			color: 'green',
            icon: 'fas fa-file-excel',
            id: 'excel',
            ext: 'xlsx',
        },
        csv: {
			label: 'Csv',
			color: 'teal',
            icon: 'fas fa-file-csv',
            id: 'csv',
            ext: 'csv',
        },
    },
    
}