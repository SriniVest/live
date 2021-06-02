/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {MobileModel} from 'react-native-pytorch-core';

type ModelInfo = {
  name: string;
  model: number;
};

type Props = {
  modelInfos: ModelInfo[];
  loadAsync?: boolean;
  children?: ReactNode | ReactNode[];
};

export default function ModelPreloader({
  modelInfos,
  loadAsync = false,
  children,
}: Props): React.ReactElement {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function preloadModel() {
      for (let i = 0; i < modelInfos.length; i++) {
        await MobileModel.preload(modelInfos[i].model);
      }
      setIsReady(true);
    }
    preloadModel();
  }, [setIsReady, modelInfos]);

  if (!isReady && !loadAsync) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="tomato" />
        <Text style={styles.label}>Loading Models</Text>
      </View>
    );
  }

  return (
    <>
      {children}
      {!isReady && (
        <View style={styles.asyncContainer}>
          <ActivityIndicator size="small" color="tomato" />
          <Text style={styles.asyncLabel}>Loading Models</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    marginTop: 10,
  },
  asyncContainer: {
    backgroundColor: 'rgba(255, 255, 255, .75)',
    borderRadius: 6,
    bottom: 70,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    position: 'absolute',
    right: 10,
  },
  asyncLabel: {
    marginStart: 10,
  },
});