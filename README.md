## Overview

Please copy the UI demonstrated in this video: [tree nav demo](https://drive.google.com/file/d/1v7gtQKTfstVMjkEPp48V1a1TqUzcSVwh/view?usp=sharing)

In the attached repo, source code for a demo application is included. Find two functions in `utils/api.js`:

 1. `getTreeData` ->  Function returns a fully specified categorization tree. Each node includes an id (UUID), a label, and a name.

 2. `getNodeData` -> Function returns a randomly assigned `shouldShow` data property.

These two functions should be your data sources. Ideally, each API call should not need to be called more than once.

This bit of work is meant to take approximately 4 hours worth of work; the requirements below are probably more than that; lower priority requirements can just be avoided altogether if time does not permit. Try to complete as much of the high priority part as you can. Please police yourself and stop at ~4h.

## High Priority Requirements

 - Copy/approximate the UI, as demonstrated in the above video
 - An icon that looks like a hamburger menu or anything else reasonable
 - A drawer which opens/closes when the user clicks on the icon
 - A close link at the top of the drawer to close/open the drawer as appropriate
 - A dynamically loaded/generated tree, as shown in the video and described below, based on the results of the `getTreeData` api call below
 - Implement lazy loading, memoization, caching and other techniques to make sure that the tree is rendered snappily on each drawer open and that otherwise the user experience isn't snagged or delayed
 - The tree nodes should be clickable; the target url is mapped based on each node's label:
  - cat1 -> `/industries/$(node.name)`
  - cat2,3,4,5 -> `/category{Two/Three/Four/Five}/$(node.id)`

The source data changes very infrequently. The api calls should not need to be called more than once with the same arguments. 

Note specifically that the `getNodeData` function returns a different random result each time it's called - this can lead to very strange behavior if it's called more than once with the same argument list!

Each node in the expanded tree should only show an "arrow" expansion sign if it does in fact have children which should be shown.

Each node should only be shown if both
 1. its `getNodeData` `shouldShow` property is set to `true`
 2. its name does not start with the string "NO_LABEL"

## Lower Priority Requirements

- use the included `stall` function to simulate an artificial delay when calling api calls, and include a "Loading..." message in the ui wherever appropriate
- `getTreeData` could return much too much data all at once, and won't scale well. Instead, implement a `getNode(s)` api call, which takes an array of UUIDs as its argument and returns just the relevant nodes and an array of UUIDs for each nodes' children (instead of the complete nodes as children). Switch to using that call and avoid using `getTreeData` altogether.
- Implement some automated testing or validation for the component
- Refactor the `Page` view to use `getNode(s)` to render the heading as shown in the video
