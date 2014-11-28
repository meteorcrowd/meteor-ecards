var imageStore = new FS.Store.FileSystem("images", {path: "/public/images"});

var Images = new FS.Collection("images", {
    stores: []
});
