/* Copyright IBM Corp. 2017  All Rights Reserved.                    */
import Jasmine from 'jasmine';
import reporters from 'jasmine-reporters';
import path from 'path';
import app from '../src/server/server';

const junitReporter = new reporters.JUnitXmlReporter({
  savePath: path.resolve(__dirname, 'reports/unit/'),
  consolidateAll: false,
});

const jrunner = new Jasmine({});
jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
jrunner.configureDefaultReporter({
  showColors: true,
});
jrunner.addReporter(junitReporter);
jrunner.loadConfig({
  spec_dir: './tests',
  spec_files: ['*.spec.ts'],
  stopSpecOnExpectationFailure: false,
  random: false,
});

app.on('booted', () => {
  jrunner.execute();
});
