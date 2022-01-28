const roughenFolder = (files, folders) => {
  const listing = [];

  const topLevelFolders = folders.filter((folder) => {
    const folderSplit = folder.split("/");
    return folderSplit.length < 2;
  });
  for (let i = 0; i < topLevelFolders.length; i++) {
    const furtherFiles = files
      .filter((file) => file.startsWith(topLevelFolders[i]))
      .map((file) => {
        const fileSplit = file.split("/");
        return { name:  fileSplit.slice(1, fileSplit.length).join("/"), fullpath: file };
      });
    const furtherFolders = folders
      .filter(
        (folder) =>
          folder !== topLevelFolders[i] && folder.startsWith(topLevelFolders[i])
      )
      .map((folder) => {
        const folderSplit = folder.split("/");
        return folderSplit.slice(1, folderSplit.length).join("/");
      });
    const topLevelFiles = furtherFiles.filter((file) => {
      return {name: file.name.split("/").length < 2, fullpath: file.fullpath };
    });
    listing.push({
      isFolder: true,
      name: topLevelFolders[i],
      files: [...topLevelFiles.map((file) => {return {name: file.name, fullpath: file.fullpath, isFolder: false}}), ...roughenFolder(furtherFiles.map((file) => file.name), furtherFolders)]
    });
  }

  return listing;
};

export default roughenFolder;
