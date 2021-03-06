#!/usr/bin/env node

/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

import * as commander from 'commander';
import * as fs from 'fs';
import * as util from './util';

commander
  .arguments('<manifest>')
  .action(async (manifest) => {

    if (fs.existsSync(manifest)) {
      process.exitCode = await util.validateManifest(manifest) === 'Error' ? 1 : 0;
      process.exit();
    } else {
      console.log('-------------------------------------');
      console.log('Error: Please provide a valid local manifest file path.');
      console.log('-------------------------------------');
      // update node process exit code when file does not exit
      process.exitCode = 1;
      process.exit();
    }
  }).parse(process.argv);
