//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Copyright (C) 2015-2016 Quildreen Motta.
// Licensed under the MIT licence.
//
// See LICENCE for licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

module.exports = {
  ...require('./core'),
  fromNullable: require('folktale/data/conversions/nullable-to-validation'),
  fromEither: require('folktale/data/conversions/either-to-validation'),
  fromMaybe: require('folktale/data/conversions/maybe-to-validation')
};
