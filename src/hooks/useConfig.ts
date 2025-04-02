import { useEffect, useState } from "react";
import {
  FLAVOURS,
  FLAVOUR_STORAGE_KEY,
  VERSIONS,
  VERSION_STORAGE_KEY,
} from "../config";
import { setModel, setPrompt } from "../request";
import useLocalState from "./useLocalState";

const useConfig = () => {
  const [version, setVersion] = useState("");
  const [flavour, setFlavour] = useState("");
  const { load: loadVersion } = useLocalState(version, VERSION_STORAGE_KEY);
  const { load: loadFlavour } = useLocalState(flavour, FLAVOUR_STORAGE_KEY);

  useEffect(() => {
    setVersion(loadVersion() || VERSIONS[0]);
    setFlavour(loadFlavour() || FLAVOURS[0]);
  }, [loadVersion, loadFlavour]);

  const setNewVersion = (newVersion: string) => {
    setModel(newVersion);
    setVersion(newVersion);
  };

  const currentVersion = version;

  const versions = VERSIONS;

  const setNewFlavour = (newFlavour: string) => {
    setFlavour(newFlavour);
    setPrompt(newFlavour);
  };

  const currenFlavour = flavour;

  const flavours = FLAVOURS;

  return {
    setNewVersion,
    currentVersion,
    versions,
    setNewFlavour,
    currenFlavour,
    flavours,
  };
};

export default useConfig;
